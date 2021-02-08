<?php

function disable_comments_setup(){
    // Removes comments from admin menu
    add_action( 'admin_menu', function() {
        remove_menu_page( 'edit-comments.php' );
    });

    // Removes comments from post and pages
    add_action('init', function() {
        remove_post_type_support( 'post', 'comments' );
        remove_post_type_support( 'page', 'comments' );
    }, 100);


    // Removes comments from admin bar
    add_action( 'wp_before_admin_bar_render', function(){
        global $wp_admin_bar;
        $wp_admin_bar->remove_menu('comments');
    });
}

disable_comments_setup();