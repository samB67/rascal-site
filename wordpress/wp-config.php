<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'Rascal-2' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'password' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '&[D4uwa(:Q$Osphf$6(`iZ&Un12yC&aU:wde0wIj:@paika&.7*:+u.zC_%#?(gN' );
define( 'SECURE_AUTH_KEY',  ',$ffL4GM)k }~^VJj042/3lTcJ8sw*wh;t|?4TS~gzuR!%:gDd.a{#RSp:r7h7p@' );
define( 'LOGGED_IN_KEY',    'mbT1;z6B3@.y*cn5h5|~y.pg1pTBC+C]&YAh9R4-?9#[t*%5R[LEz79e0v^I,5l ' );
define( 'NONCE_KEY',        'fpgcc5+VE|5$w* X*bkg]qm#PRa1oB&@]QqRU>]I}cI~g:18jH)Y5|)7B3(-[FOn' );
define( 'AUTH_SALT',        'LNDBJ^o4=aS|- eW(-Db:LlBSH~i[gK i^*OG%DWnzl}rO|(ny9W43FNj.}8jW_)' );
define( 'SECURE_AUTH_SALT', 'p&T76Yi4Bzf(>kUqLOdn5ESP]g4{EkI!hfB.s-=>.JYE>!1eU1ZzSiNm;TJbQw6i' );
define( 'LOGGED_IN_SALT',   '&Mro]Itt~1)nau7LEZ[AX|`iLw#+O@b?W2~%_q-W5ELv#H43>ef.lYTmdhTkauK]' );
define( 'NONCE_SALT',       'xoGBUrvQEAG@mjG9gv{3Me[|3-J2):[{2GE!T*Pv`M6sc&@HsL}myyU..M)1Z<K3' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_872_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', true );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
