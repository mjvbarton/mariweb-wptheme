<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package mjvbarton
 * @subpackage mariweb-wptheme
 * @since Mari's blog Wordpress Theme 1.0
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="theme-color" content="#000000" />
	<!-- <link rel="icon" href="%PUBLIC_URL%/favicon.ico" /> TODO: Add favicon-->
	<!-- <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" /> TODO: A-->
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>

	<noscript>You need to enable JavaScript to run this app.</noscript>

	<div id="root"></div>

	<?php wp_footer(); ?>
</body>


