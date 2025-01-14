/**
 * External dependencies
 */
import { Page } from 'puppeteer';
/**
 * Internal dependencies
 */
import { getElementByText, waitForElementByText } from '../utils/actions';
import { BaseElement } from './BaseElement';

export class HelpMenu extends BaseElement {
	protected helpMenuId = '#contextual-help-columns';

	constructor( page: Page ) {
		super( page, '' );
	}

	async openHelpMenu() {
		const el = await getElementByText( 'button', 'Help' );
		await el?.click();
	}

	async openSetupWizardTab() {
		const el = await waitForElementByText( '*', 'Setup wizard' );
		await el?.click();
	}

	async enableTaskList() {
		await this.openSetupWizardTab();

		const enableLink = await getElementByText(
			'*',
			'Enable',
			this.helpMenuId
		);
		await enableLink?.click();
	}
}
