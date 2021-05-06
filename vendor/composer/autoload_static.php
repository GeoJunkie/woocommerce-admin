<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit671d83dc809b3f86b9e98dc9f4ae9ddb
{
    public static $prefixLengthsPsr4 = array (
        'C' => 
        array (
            'Composer\\Installers\\' => 20,
        ),
        'A' => 
        array (
            'Automattic\\WooCommerce\\Admin\\' => 29,
            'Automattic\\Jetpack\\Autoloader\\' => 30,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Composer\\Installers\\' => 
        array (
            0 => __DIR__ . '/..' . '/composer/installers/src/Composer/Installers',
        ),
        'Automattic\\WooCommerce\\Admin\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
        'Automattic\\Jetpack\\Autoloader\\' => 
        array (
            0 => __DIR__ . '/..' . '/automattic/jetpack-autoloader/src',
        ),
    );

    public static $classMap = array (
        'Automattic\\Jetpack\\Autoloader\\AutoloadGenerator' => __DIR__ . '/..' . '/automattic/jetpack-autoloader/src/AutoloadGenerator.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit671d83dc809b3f86b9e98dc9f4ae9ddb::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit671d83dc809b3f86b9e98dc9f4ae9ddb::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit671d83dc809b3f86b9e98dc9f4ae9ddb::$classMap;

        }, null, ClassLoader::class);
    }
}
