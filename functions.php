<?php
/**
 * Functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package mjvbarton
 * @subpackage mariweb-wptheme
 * @since Mari's blog Wordpress Theme 1.0
 */

if ( ! function_exists( 'mariweb_setup' ) ) {
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 *
	 * @since Mari's blog Wordpress Theme 1.0
	 *
	 * @return void
	 */
	function mariweb_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Twenty Twenty-One, use a find and replace
		 * to change 'mariweb-wptheme' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'mariweb-wptheme', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * This theme does not use a hard-coded <title> tag in the document head,
		 * WordPress will provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/**
		 * Add post-formats support.
		 */
		// add_theme_support(
		// 	'post-formats',
		// 	array(
		// 		'link',
		// 		'aside',
		// 		'gallery',
		// 		'image',
		// 		'quote',
		// 		'status',
		// 		'video',
		// 		'audio',
		// 		'chat',
		// 	)
		// );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );
		set_post_thumbnail_size( 1568, 9999 ); // TODO: Make revision

		register_nav_menus(
			array(
				'primary' => esc_html__( 'Hlavní menu', 'mariweb-wptheme' ),				
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
				'navigation-widgets',
			)
		);

		/**
		 * Add support for core custom logo. Not in use
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		// $logo_width  = 300;
		// $logo_height = 100;

		// add_theme_support(
		// 	'custom-logo',
		// 	array(
		// 		'height'               => $logo_height,
		// 		'width'                => $logo_width,
		// 		'flex-width'           => true,
		// 		'flex-height'          => true,
		// 		'unlink-homepage-logo' => true,
		// 	)
		// );
		
		// Add support for Block Styles.
		// add_theme_support( 'wp-block-styles' );

		// Add support for full and wide align images.
		// add_theme_support( 'align-wide' );

		// // Add support for editor styles.
		// add_theme_support( 'editor-styles' );
		// $background_color = get_theme_mod( 'background_color', 'D1E4DD' );
		// if ( 127 > Twenty_Twenty_One_Custom_Colors::get_relative_luminance_from_hex( $background_color ) ) {
		// 	add_theme_support( 'dark-editor-style' );
		// }

		// $editor_stylesheet_path = './assets/css/style-editor.css';

		// Note, the is_IE global variable is defined by WordPress and is used
		// to detect if the current browser is internet explorer.
		// global $is_IE;
		// if ( $is_IE ) {
		// 	$editor_stylesheet_path = './assets/css/ie-editor.css';
		// }

		// Enqueue editor styles.
		// add_editor_style( $editor_stylesheet_path );				

		// Add support for responsive embedded content.
		add_theme_support( 'responsive-embeds' );

		// Disabling custom colors in editor				
		add_theme_support( 'disable-custom-colors' );
		add_theme_support( 'editor-color-palette', array());

		// Disabling custom font sizes		
		add_theme_support( 'disable-custom-font-sizes' );
		add_theme_support('editor-font-sizes', array());

		// Edits excerpt
		add_filter( 'excerpt_more', function(){
			return '';
		});

		// Includes module for social sites
		require_once(get_template_directory() . '/inc/social-sites.php');
		require_once(get_template_directory() . '/inc/front-page.php');
		require_once(get_template_directory() . '/inc/backgrounds.php');
		require_once(get_template_directory() . '/inc/customize-footer.php');
		require_once(get_template_directory() . '/inc/aggregate-api.php');
		require_once(get_template_directory() . '/inc/disable-comments.php');
	}
}
add_action( 'after_setup_theme', 'mariweb_setup' );


/**
 * Enqueue scripts and styles.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @return void
 */
function mariweb_scripts() {
	// Note, the is_IE global variable is defined by WordPress and is used
	// to detect if the current browser is internet explorer.		
	if(file_exists(get_template_directory() . '/build/asset-manifest.json')){

		// Retrieve assets from manifest
		$assetManifest = json_decode(file_get_contents(get_template_directory() . '/build/asset-manifest.json', 'r+'));
		 
		foreach($assetManifest->files as $index => $asset){
			// Enqueue stylesheets
			if(!is_bool(strpos($asset, '.css'))){
				wp_enqueue_style( 'mariweb-styles-' . $index, get_template_directory_uri() . '/build/' . $asset, [], wp_get_theme()->get('Version'));
			} else if(!is_bool(strpos($asset, '.js'))){				
				wp_enqueue_script('mariweb-scripts-' . $index, get_template_directory_uri() . '/build/' . $asset, array(), wp_get_theme()->get('Version'), true);
			}

			// Enqueue javascript files
			// else if(!is_bool(strpos($asset, '.js')))			
			// 	wp_enqueue_script( 'mariweb-scripts', get_template_directory_uri() . '/build/' . $asset, array(), wp_get_theme()->get('Version'), true);						
		}
		$cssAssets = array_filter($assetManifest->entrypoints, function($asset){
			return !is_bool(strpos($asset, '.css'));
		});

		$jsAssets = array_filter($assetManifest->entrypoints, function($asset){
			return !is_bool(strpos($asset, '.js'));
		});		
	} else {
		exit("Theme not built yet. Run npm build.");
	}	
}
add_action( 'wp_enqueue_scripts', 'mariweb_scripts' );

function hide_defaults_in_customizer(WP_Customize_Manager $wpc){	
    $wpc->remove_section( 'colors');
    $wpc->remove_section( 'header_image');
    $wpc->remove_section( 'background_image');    
    $wpc->remove_section( 'static_front_page');
    $wpc->remove_section( 'custom_css');
}
add_action('customize_register', 'hide_defaults_in_customizer', 50);

