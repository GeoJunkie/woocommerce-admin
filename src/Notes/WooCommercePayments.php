<?php
/**
 * WooCommerce Admin WooCommerce Payments Note Provider.
 *
 * Adds a note to the merchant's inbox showing the benefits of the WooCommerce Payments.
 */

namespace Automattic\WooCommerce\Admin\Notes;

defined( 'ABSPATH' ) || exit;

/**
 * WooCommerce_Payments
 */
class WooCommerce_Payments {
	/**
	 * Note traits.
	 */
	use NoteTraits;

	/**
	 * Name of the note for use in the database.
	 */
	const NOTE_NAME = 'wc-admin-woocommerce-payments';

	/**
	 * Name of the note for use in the database.
	 */
	const PLUGIN_SLUG = 'woocommerce-payments';

	/**
	 * Name of the note for use in the database.
	 */
	const PLUGIN_FILE = 'woocommerce-payments/woocommerce-payments.php';

	/**
	 * Attach hooks.
	 */
	public function __construct() {
		add_action( 'woocommerce_note_action_install-now', array( $this, 'install' ) );
		add_action( 'woocommerce_note_action_get-woocommerce-payments', array( $this, 'handle_promo' ) );
		add_action( 'init', array( $this, 'install_woocommerce_payments' ) );
		add_action( 'wc-admin-woocommerce-payments_add_note', array( $this, 'add_note' ) );
	}

	/**
	 * Maybe add a note on WooCommerce Payments for US based sites older than a week without the plugin installed.
	 */
	public static function possibly_add_note() {
		if ( ! self::wc_admin_active_for( WEEK_IN_SECONDS ) || 'US' !== WC()->countries->get_base_country() ) {
			return;
		}

		$data_store = \WC_Data_Store::load( 'admin-note' );

		// We already have this note? Then mark the note as actioned.
		$note_ids = $data_store->get_notes_with_name( self::NOTE_NAME );
		if ( ! empty( $note_ids ) ) {

			$note_id = array_pop( $note_ids );
			$note    = Notes::get_note( $note_id );
			if ( false === $note ) {
				return;
			}

			// If the WooCommerce Payments plugin was installed after the note was created, make sure it's marked as actioned.
			if ( self::is_installed() && Note::E_WC_ADMIN_NOTE_ACTIONED !== $note->get_status() ) {
				$note->set_status( Note::E_WC_ADMIN_NOTE_ACTIONED );
				$note->save();
			}

			return;
		}

		$current_date = new \DateTime();
		$publish_date = new \DateTime( '2020-04-14' );

		if ( $current_date >= $publish_date ) {

			$note = self::get_note();
			if ( self::can_be_added() ) {
				$note->save();
			}

			return;

		} else {

			$hook_name = sprintf( '%s_add_note', self::NOTE_NAME );

			if ( ! WC()->queue()->get_next( $hook_name ) ) {
				WC()->queue()->schedule_single( $publish_date->getTimestamp(), $hook_name );
			}
		}
	}

	/**
	 * Add a note about WooCommerce Payments.
	 *
	 * @return Note
	 */
	public static function get_note() {
		$note = new Note();
		$note->set_title( __( 'Try the new way to get paid', 'woocommerce-admin' ) );
		$note->set_content( __( 'Securely accept credit and debit cards on your site. Manage transactions without leaving your WordPress dashboard. Only with WooCommerce Payments.', 'woocommerce-admin' ) );
		$note->set_content_data( (object) array() );
		$note->set_type( Note::E_WC_ADMIN_NOTE_MARKETING );
		$note->set_name( self::NOTE_NAME );
		$note->set_source( 'woocommerce-admin' );
		$note->add_action( 'learn-more', __( 'Learn more', 'woocommerce-admin' ), 'https://woocommerce.com/payments/', Note::E_WC_ADMIN_NOTE_UNACTIONED );
		$note->add_action( 'install-now', __( 'Install now', 'woocommerce-admin' ), false, Note::E_WC_ADMIN_NOTE_ACTIONED, true );

		// Create the note as "actioned" if the plugin is already installed.
		if ( self::is_installed() ) {
			$note->set_status( Note::E_WC_ADMIN_NOTE_ACTIONED );
		}
		return $note;
	}


	/**
	 * Check if the WooCommerce Payments plugin is active or installed.
	 */
	protected static function is_installed() {
		if ( defined( 'WC_Payments' ) ) {
			return true;
		}
		include_once ABSPATH . '/wp-admin/includes/plugin.php';
		return 0 === validate_plugin( self::PLUGIN_FILE );
	}

	/**
	 * Install WooCommerce Payments when note is actioned.
	 *
	 * @param Note $note Note being acted upon.
	 */
	public function install( $note ) {
		if ( self::NOTE_NAME === $note->get_name() && current_user_can( 'install_plugins' ) ) {
			$this->install_and_activate_wcpay();
		}
	}

	/**
	 * Install and activate WooCommerce Payments.
	 */
	private function install_and_activate_wcpay() {
		$install_request = array( 'plugins' => self::PLUGIN_SLUG );
		$installer       = new \Automattic\WooCommerce\Admin\API\Plugins();
		$result          = $installer->install_plugins( $install_request );

		if ( is_wp_error( $result ) ) {
			return;
		}

		$activate_request = array( 'plugins' => self::PLUGIN_SLUG );
		return $installer->activate_plugins( $activate_request );
	}

	/**
	 * Handle WC Pay promo note action.
	 *
	 * @param Note $note Note being acted upon.
	 */
	public function handle_promo( $note ) {
		if ( 'wcpay_2020_11_promo' !== $note->get_name() || ! current_user_can( 'install_plugins' ) ) {
			return;
		}

		$this->install_and_activate_wcpay();
		$actions     = $note->get_actions( 'edit' );
		$new_actions = [];
		foreach ( $actions as $action ) {
			if ( 'get-woocommerce-payments' === $action->name ) {
				$action->label = 'Set Up';
				$params        = [
					'page' => 'wc-admin',
					'path' => '/payments/connect',
				];
				$action->query = \admin_url( \add_query_arg( $params, 'admin.php' ) );
			}
			$new_actions[] = clone $action;
		}
		$note->set_actions( $new_actions );

		$note->save();
	}

	/**
	 * Install Woocommerce Payments.
	 */
	public function install_woocommerce_payments() {
		// TODO: Need to validate this request more strictly since we're taking install actions directly?
		/* phpcs:disable WordPress.Security.NonceVerification */
		if (
			! isset( $_GET['page'] ) ||
			'wc-admin' !== $_GET['page'] ||
			! isset( $_GET['action'] ) ||
			'install-woocommerce-payments' !== $_GET['action']
		) {
			return;
		}
		/* phpcs:enable */

		// Install WooCommerce Payments.
		$installer = new \Automattic\WooCommerce\Admin\API\Plugins();

		$install_request = array( 'plugins' => 'woocommerce-payments' );
		$result          = $installer->install_plugins( $install_request );
		if ( is_wp_error( $result ) ) {
			return;
		}

		$activate_request = array( 'plugins' => 'woocommerce-payments' );
		$installer->activate_plugins( $activate_request );
		if ( is_wp_error( $result ) ) {
			return;
		}

		// TODO: WooCommerce Payments is installed at this point, so we could link straight into the on-boarding flow.
		$wcpay_settings_url = admin_url( 'admin.php?page=wc-admin&path=/payments/connect' );
		wp_safe_redirect( $wcpay_settings_url );
		exit;
	}
}
