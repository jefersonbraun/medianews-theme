var contheight;
function px_amimate(id){
	var $ = jQuery;
	$("#"+id).animate({
		height: 'toggle'
		}, 1000, function() {
		// Animation complete.
	});
}

	function hide_all(id){
		var $ = jQuery;
		var itemmain=$("#"+id);
		$("#add_page_builder_item > div") .css({"transition":"none","-moz-transition":"none","-webkit-transition":"none","-o-transition":"none","-ms-transition":"none"});
		itemmain.css({"padding":0});
		itemmain.parent('.column') .css({"width":"100%"});
		var showdiv =itemmain.parents(".column"); 
		$(".column,.column-in,.page-builder,.elementhidden") .not(showdiv) .hide();
		itemmain.slideDown(600);
			$('html, body').animate({ scrollTop: itemmain.offset().top - 50}, 600);
		
		

 };
  function addtrack(id){
  var $ = jQuery;
  contheight = $('.page-opts').height();
  //var widthvr = $('.page-opts').outerWidth(true);
  var popd = $("#"+id).height();
  $("#"+id).css("top", popd);
  $("#"+id).css("display", "block");
  $(".poped-up").css("height", popd);
  $(".page-opts").css("height", popd);
  $("#"+id).animate({
   top: 0,
  }, 500, function() {
   // Animation complete.
  });
  //$.scrollTo( '#normal-sortables', 800, {easing:'swing'} );
 };
  function closetrack(id){
  var $ = jQuery;
  $(".page-opts").css("height", "auto");
  //var widthvr = $('.page-opts').outerHeight();
  $("#"+id).animate({
   top: contheight + 100,
  }, 500, function() {
  // Animation complete.
  });
  $("#"+id).hide(500).delay(500);
	//$.scrollTo( '#normal-sortables', 800, {easing:'swing'} );
 };
 
 var counter_track = 0;

 function show_all(id){
   var $ = jQuery;
  var itemmain=$("#"+id);
    itemmain.slideUp(800);
	 setTimeout( function(){
	itemmain.parent('.column').css({"width":""});
	itemmain.css({"padding":""}); 
    },800);
		$(".column-in,.column,.page-builder,.elementhidden") .delay(800) .fadeIn(400,function(){
		
		$("#add_page_builder_item > div") .css({"transition":"width 500ms ease","-moz-transition":"width 500ms ease","-webkit-transition":"width 500ms ease","-o-transition":"width 500ms ease","-ms-transition":"width 500ms ease"}); 
	 });
	


 };
 
 function openpopedup(id){
  var $ = jQuery;
	$(".elementhidden,.opt-head,.option-sec,.to-table thead,.to-table tr")  .hide();
	$("#"+id) .parents("tr") .show();
	$("#"+id) .parents("td") .css("width","100%");
	$("#"+id) .parents("td") .prev() .hide();
	$("#"+id) .parents("td") .find("a.actions") .hide();
	$("#"+id).children(".opt-head") .show();
  $("#"+id).slideDown();
   
  $("#"+id).animate({
   top: 0,
  }, 400, function() {
   // Animation complete.
  });
 // $.scrollTo( '#normal-sortables', 800, {easing:'swing'} );
 };
  function openpopedup_social(id){
  var $ = jQuery;
	jQuery(".add_social_link").hide();
	jQuery(".close_social_link").show();

  $("#"+id).slideDown();
 
 };
 
 function closepopedup(id){
  var $ = jQuery;
  $("#"+id).slideUp(800);

	$(".to-table tr") .css("width","");
	$(".elementhidden,.opt-head,.option-sec,.to-table thead,.to-table tr,a.actions,.to-table tr td").delay(600)  .fadeIn(200);
	
	$.scrollTo( '.elementhidden', 800, {easing:'swing'} );
 };
function closepopedup_social(id){
  var $ = jQuery;
  	jQuery(".add_social_link").show();
	jQuery(".close_social_link").hide();
	  $("#"+id).slideUp(800);

 };
	
	// Update sermon Title
	function update_title(id){
		var val;
	}

	// remove image
	function remove_image(id){
		var $ = jQuery;
		$('#'+id).val('');
		$('#'+id+'_img_div').hide();
		$('#'+id+'-preview').hide();
		$('#'+id+'-preview img').attr('src', '');
	}
	
	// slide out 
	function slideout(){
		setTimeout(function(){
			jQuery(".form-msg").slideUp("slow", function () {
			});
		}, 5000);
	}
	// remove div
	function px_div_remove(id){
		jQuery("#"+id).remove();
	}
	// toggle 
	function px_toggle(id){
		jQuery("#"+id).slideToggle("slow");
	}
	// toggle value
	function toggle_with_value(id, value){
		if ( value == 0 ) jQuery("#"+id).hide("slow");
		else  jQuery("#"+id).show("slow");
		
	}
	function px_upcomingfixture_toggle(value, id){
		if ( value == 'list' ){
		 	jQuery("#upcomingfixtures_"+id).show("slow");
		} else {
			jQuery("#upcomingfixtures_"+id).hide("slow");
		}
	}
	function px_team_toggle(value, id){
		if ( value == 'Grid View' ){
		 	jQuery("#department"+id).show("slow");
		} else {
			jQuery("#department"+id).hide("slow");
		}
	}

	// toggle id
	function px_toggle_tog(id){
		jQuery("#"+id).toggle();
	}
	// toggle sidebar	
	function show_sidebar(id){
		var $ = jQuery;
		jQuery('input[name="px_layout"]').change(function(){
			jQuery(this).parent().parent().find(".check-list").removeClass("check-list");
			jQuery(this).siblings("label").children("#check-list").addClass("check-list");
		});
		if ( id == 'left'){
			jQuery("#sidebar_right").hide();
			jQuery("#sidebar_left").show();
			jQuery("#sidebar_small").hide();
		}
		else if ( id == 'right'){
			jQuery("#sidebar_left").hide();
			jQuery("#sidebar_right").show();
			jQuery("#sidebar_small").hide();
		}
		else if ( id == 'both_left'){
			jQuery("#sidebar_left").show();
			jQuery("#sidebar_right").hide();
			jQuery("#sidebar_small").show();
			
		}
		else if ( id == 'both_right'){
			jQuery("#sidebar_right").show();
			jQuery("#sidebar_small").show();
			jQuery("#sidebar_left").hide();
		}
		else if ( id == 'none'){
			jQuery("#sidebar_left").hide();
			jQuery("#sidebar_right").hide();
			jQuery("#sidebar_small").hide();
		}
	}
	
	// gallery captions
	function px_toggle_gal(id, counter){
		if (id==0){
			jQuery("#link_url"+counter).hide();
			jQuery("#video_code"+counter).hide();
		}
		else if (id==1){
			jQuery("#link_url"+counter).hide();
			jQuery("#video_code"+counter).show();
		}
		else if (id==2){
			jQuery("#link_url"+counter).show();
			jQuery("#video_code"+counter).hide();
		}
	}
	
	// gallery captions
	function px_blognews_toggle(id, counter){
		if (id=='blog-home'){
			jQuery("#news_featuredcat_"+counter).hide();
			jQuery("#news_pagination"+counter).hide();
			jQuery("#news_featured_post"+counter).show();
			jQuery("#news_description_post"+counter).hide();
			jQuery("#news_image_post"+counter).hide();
		}
		else if (id=='blog-gallery'){
			jQuery("#news_featuredcat_"+counter).hide();
			jQuery("#news_pagination"+counter).hide();
			jQuery("#news_excerptlength"+counter).hide();
			jQuery("#news_featured_post"+counter).hide();
			jQuery("#news_description_post"+counter).hide();
			jQuery("#news_image_post"+counter).hide();
		}
		else if (id=='blog-carousel'){
			jQuery("#news_featuredcat_"+counter).hide();
			jQuery("#news_pagination"+counter).hide();
			jQuery("#news_featured_post"+counter).hide();
			jQuery("#news_description_post"+counter).hide();
			jQuery("#news_image_post"+counter).hide();
		}
		else if (id=='blog-carousel-v2'){
			jQuery("#news_featuredcat_"+counter).hide();
			jQuery("#news_pagination"+counter).hide();
			jQuery("#news_featured_post"+counter).hide();
			jQuery("#news_description_post"+counter).hide();
			jQuery("#news_image_post"+counter).hide();
		}
		else if (id=='blog-banner-carousel'){
			jQuery("#news_featuredcat_"+counter).hide();
			jQuery("#news_pagination"+counter).hide();
			jQuery("#news_featured_post"+counter).hide();
			jQuery("#news_description_post"+counter).hide();
			jQuery("#news_image_post"+counter).hide();
		
		} else {
			jQuery("#news_featuredcat_"+counter).show();
			jQuery("#news_pagination"+counter).show();
			jQuery("#news_description_post"+counter).show();
			jQuery("#news_image_post"+counter).show();
			
		}
		
	}

		// gallery captions
	function px_blog_reviews_toggle(id){
		if (id=='custom'){
			jQuery("#custom-postion").show();
		} else {
			jQuery("#custom-postion").hide();
			
		}
		
	}



		// delete page builder item
		var counter = 0;
		function delete_this(id){
				jQuery('#'+id).remove();
				jQuery('#'+id+'_del').remove();
				count_widget--;
				if (count_widget < 1)jQuery("#add_page_builder_item").addClass("hasclass");
				}
			// page builder items array
		var Data = [{ "Class" : "column_100" , "title" : "100" , "element" : ["gallery", "slider", "blog", "contact", "column", "divider", "message_box", "image_frame", "map", "video", "quote", "dropcap", "pricetable","services", "tabs", "accordion"] },
			{ "Class" : "column_75" , "title" : "75" , "element" : ["gallery", "slider", "blog", "contact", "column", "divider", "message_box", "image_frame", "map", "video", "quote", "dropcap","services", "tabs", "accordion"] },
			{ "Class" : "column_67" , "title" : "67" , "element" : ["gallery", "slider", "blog", "contact", "column", "divider", "message_box", "image_frame", "map", "video", "quote", "dropcap","tabs", "accordion"] },
			{ "Class" : "column_50" , "title" : "50" , "element" : ["gallery", "slider", "blog", "contact", "column", "divider", "message_box", "image_frame", "map", "video", "quote", "dropcap","services", "tabs", "accordion"] },
			{ "Class" : "column_33" , "title" : "33" , "element" : ["gallery", "slider", "blog", "contact", "column",  "message_box", "map", "video", "quote", "dropcap","services", "tabs", "accordion"] },
			{ "Class" : "column_25" , "title" : "25" , "element" : ["column", "divider", "message_box", "map",,"services"] },
		];
		// 
		function decrement(id){
			var $ = jQuery;
			var parent,ColumnIndex,CurrentWidget,CurrentColumn,module;
			parent = $(id).parent('.column-in');
			parent = $(parent).parent('.column');
			CurrentColumn = parseInt($(parent).attr('data'));
			CurrentWidget = $(parent).attr('widget');
			ColumnIndex = parseInt($(parent).attr('data'));
			module = $(parent).attr('item').toString();
			for(i = ColumnIndex + 1; i < Data.length; i++){
				for(c = 0; c <= Data[i].element.length; c++){
					if(Data[i].element[c] == module ){
						$(parent).removeClass(Data[ColumnIndex].Class)
						$(parent).addClass(Data[i].Class)
						$(parent).find('.ClassTitle').text(Data[i].title);
						$(parent).find('.item').val(Data[i].title);
						$(parent).find('.columnClass').val(Data[i].Class)
						$(parent).attr('data',i);
						return false;
					}
				}
			}
		}
        function increment(id){
			var $ = jQuery;
            var parent,ColumnIndex,CurrentWidget,CurrentColumn,module;
			parent = $(id).parent('.column-in');
			parent = $(parent).parent('.column');
            CurrentColumn = parseInt($(parent).attr('data'));
            CurrentWidget = $(parent).attr('widget');
            ColumnIndex = parseInt($(parent).attr('data'));
            module = $(parent).attr('item').toString();
				if(ColumnIndex > 0){
				for(i = ColumnIndex - 1; i < Data.length; i--){//
					for(c = 0; c <= Data[i].element.length; c++){
						if(Data[i].element[c] == module ){
							$(parent).removeClass(Data[ColumnIndex].Class)
							$(parent).addClass(Data[i].Class)
							$(parent).find('.ClassTitle').text(Data[i].title);
							$(parent).find('.item').val(Data[i].title);
							$(parent).attr('data',i);
							return false;
						}
					}
				}
			}
        }

        function px_to_restore_default(admin_url, theme_url){
			//jQuery(".loading_div").show('');
			var var_confirm = confirm("You current theme options will be replaced with the default theme activation options.");
			if ( var_confirm == true ){
				var dataString = 'action=theme_option_restore_default';
				jQuery.ajax({
					type:"POST",
					url: admin_url,
					data: dataString,
					success:function(response){
						jQuery(".form-msg").show();
						jQuery(".form-msg").html(response);
						jQuery(".loading_div").hide();
 						window.location.reload();
						slideout();
					}
				});
			}
            //return false;
		}

        function px_to_backup(admin_url, theme_url){
			//jQuery(".loading_div").show('');
			var var_confirm = confirm("Are you sure! you want to take your current theme option backup?");
			if ( var_confirm == true ){
				var dataString = 'action=theme_option_backup';
				jQuery.ajax({
					type:"POST",
					url: admin_url,
					data: dataString,
					success:function(response){
						parts = response.split("@");
						jQuery("#last_backup_taken").html(parts[1]);
						jQuery(".form-msg").show();
						jQuery(".form-msg").html(parts[0]);
						jQuery(".loading_div").hide();
						window.location.reload();
						slideout();
					}
				});
			}
            //return false;
		}

        function px_to_backup_restore(admin_url, theme_url){
			//jQuery(".loading_div").show('');
			var var_confirm = confirm("Are you sure! you want to replace your current theme options with your last backup?");
			if ( var_confirm == true ){
				var dataString = 'action=theme_option_backup_restore';
				jQuery.ajax({
					type:"POST",
					url: admin_url,
					data: dataString,
					success:function(response){
						jQuery(".form-msg").show();
						jQuery(".form-msg").html(response);
						jQuery(".loading_div").hide();
						window.location.reload();
						slideout();
					}
				});
			}
            //return false;
		}

        function px_to_import_export(admin_url, theme_url){
			//jQuery(".loading_div").show('');
			var var_confirm = confirm("Are you sure! you want to import this theme options?");
			if ( var_confirm == true ){
				var theme_option_data = jQuery("#theme_option_data_import").val();
				var dataString = 'action=theme_option_import_export&theme_option_data='+theme_option_data;
 				jQuery.ajax({
					type:"POST",
					url: admin_url,
					data: dataString,
					success:function(response){
						jQuery(".form-msg").show();
						jQuery(".form-msg").html(response);
						jQuery(".loading_div").hide();
						//window.location.reload();
						slideout();
					}
				});
				//return false;
			}
        }
        function theme_option_save(admin_url, theme_url){
			jQuery(".loading_div").show('');
			
            jQuery.ajax({
                type:"POST",
                url: admin_url,
				data:jQuery('#frm').serialize(), 
                success:function(response){
                    jQuery(".form-msg").show();
                    jQuery(".form-msg").html(response);
                    jQuery(".loading_div").hide();
					//window.location.reload();
                    slideout();
                }
            });
            //return false;
        }


					// deleting the accordion start
					jQuery("a.deleteit_node") .live('click',function(){
							var mainConitem=jQuery(this) .parents(".wrapptabbox");
							jQuery(this).parent() .append("<div id='confirmOverlay' style='display:block'> \
								<div id='confirmBox'><div id='confirmText'>Are you sure to do this?</div> \
								<div id='confirmButtons'><div class='button confirm-yes'>Delete</div>\
								<div class='button confirm-no'>Cancel</div><br class='clear'></div></div></div>");
								jQuery(this) .parents(".clone_form").addClass("warning");
						jQuery(".confirm-yes").click(function(){
							var totalItemCon = mainConitem.find(".clone_form").size();
							mainConitem.find(".fieldCounter") .val(totalItemCon-1);
							jQuery(this) .parents(".clone_form").fadeOut(400,function(){
									jQuery(this).remove();								
								});
							
							jQuery("#confirmOverlay") .remove();
						});
				
					jQuery(".confirm-no") .click(function(){
						jQuery(".clone_form") .removeClass("warning");
						jQuery("#confirmOverlay") .remove();	
					});
						return false;
					});

					//page Builder items delete start
					jQuery(".btndeleteit") .live("click",function(){
					jQuery(this) .parents(".parentdelete") .addClass("warning");
							jQuery(this).parent() .append("<div id='confirmOverlay' style='display:block'> \
								<div id='confirmBox'><div id='confirmText'>Are you sure to delete?</div> \
								<div id='confirmButtons'><div class='button confirm-yes'>Delete</div>\
								<div class='button confirm-no'>Cancel</div><br class='clear'></div></div></div>");
								
						jQuery(".confirm-yes").click(function(){
							jQuery(this) .parents(".parentdelete").fadeOut(400,function(){
									jQuery(this).remove();		
														
								});
							jQuery("#confirmOverlay") .remove();
							count_widget--;
							var count_widget = jQuery("#add_page_builder_item .column").length;
							if (count_widget == 1) jQuery("#add_page_builder_item").removeClass("hasclass");
						});
					jQuery(".confirm-no") .click(function(){
					jQuery(this) .parents(".parentdelete") .removeClass("warning");	
					jQuery("#confirmOverlay") .remove();	
					});
					return false;
					});
					//page Builder items delete end
					

// media pop-up start
jQuery(document).ready(function(){
var count_widget = jQuery("#add_page_builder_item .column").length;
	if (count_widget > 0) {
		jQuery("#add_page_builder_item").addClass("hasclass");
	}
	jQuery('input[type=file].file') .bind('change focus click',function(){
     var a =jQuery(this).val();
     jQuery(this).next(".fakefile").find("input[type='text']").val(a);
    });
     jQuery(".uploadfile").live('click',function(){
      jQuery(".loadClass").trigger('click');
      jQuery(this).prev().addClass('pathlink');
      setInterval(watchTextbox, 100); 
     });
     function watchTextbox() {
      var txtInput = jQuery('.headerClass');
      var lastValue = jQuery("input[type=text].pathlink") .val();;
      var currentValue = txtInput.val();
      var popup = jQuery('#TB_overlay') .length;
      if(popup == 0){
       jQuery("input.testing") .removeClass('pathlink');
       return false;  
      }
      if(currentValue == 0){
       return false; 
      }
      if (lastValue != currentValue) {
       jQuery("input[type=text].pathlink") .val(currentValue);
      
      if(currentValue != ""){
       jQuery("input.testing") .removeClass('pathlink');
      }
       jQuery('.headerClass').val(''); 
       clearInterval(setInterval(watchTextbox, 100));
      }
     }
    });
// media pop-up end
// layer slider show / hide
function home_slider_toggle(id){
	if ( id == "custom") {
		jQuery("#custom_slider").show();
		jQuery("#post_slider").hide("");
		jQuery("#flex_sliders").hide("");
	}
	else if ( id == "post_carousel") {
		jQuery("#post_slider").show();
		jQuery("#custom_slider").hide("");
		jQuery("#blog-slider-noposts").show("");
		jQuery("#flex_sliders").hide("");
	}
	else if ( id == "post_slider2") {
		jQuery("#post_slider").show();
		jQuery("#custom_slider").hide("");
		jQuery("#blog-slider-noposts").hide("");
		jQuery("#flex_sliders").hide("");
	}
	else if ( id == "post_slider") {
		jQuery("#post_slider").show();
		jQuery("#blog-slider-noposts").show("");
		jQuery("#custom_slider").hide("");
		jQuery("#flex_sliders").hide("");
	}
	else {
		jQuery("#custom_slider").hide();
		jQuery("#post_slider").hide("");
		jQuery("#flex_sliders").show("");
	}
}
function page_slider_toggle(id){
	if ( id == "custom") {
		jQuery("#custom_slider").show();
		jQuery("#post_slider").hide("");
		jQuery("#flex_sliders").hide("");
		jQuery("#default_slider").hide();
	}
	else if ( id == "post_carousel") {
		jQuery("#post_slider").show();
		jQuery("#custom_slider").hide("");
		jQuery("#blog-slider-noposts").show("");
		jQuery("#flex_sliders").hide("");
		jQuery("#default_slider").hide();
	}
	else if ( id == "post_slider2") {
		jQuery("#post_slider").show();
		jQuery("#custom_slider").hide("");
		jQuery("#blog-slider-noposts").hide("");
		jQuery("#flex_sliders").hide("");
		jQuery("#default_slider").hide();
	}
	else if ( id == "flex") {
		jQuery("#custom_slider").hide();
		jQuery("#post_slider").hide("");
		jQuery("#default_slider").hide();
		jQuery("#flex_sliders").show("");
	}
	else if ( id == "post_slider") {
		jQuery("#post_slider").show();
		jQuery("#blog-slider-noposts").show("");
		jQuery("#custom_slider").hide("");
		jQuery("#default_slider").hide();
		jQuery("#flex_sliders").hide("");
	}
	else if ( id == "default_slider") {
		jQuery("#default_slider").show();
		jQuery("#custom_slider").hide();
		jQuery("#post_slider").hide("");
		jQuery("#flex_sliders").hide("");
	}
	else {
		jQuery("#custom_slider").hide();
		jQuery("#default_slider").hide();
		jQuery("#post_slider").hide("");
		jQuery("#flex_sliders").hide("");
	}
}
// related title on/off start
function related_title_toggle_inside_post(id){
	if(id.checked == true){
		jQuery("#related_post").show();
	}
 	else {
		jQuery("#related_post").hide();
	}
}
	// realated title on/off end
	

	
	var counter_track = 0;
	var counter_subject = 0;

	// adding social network start
	function social_icon_del(id){
		jQuery("#del_"+id).remove();
		jQuery("#"+id).remove();
	}

	var counter_social_network = 0;
	function px_add_social_icon(admin_url){
		counter_social_network++;
		jQuery(".add_social_link").hide();
		jQuery(".close_social_link").show();
		var social_net_icon_path = jQuery("#social_net_icon_path_input").val();
		var social_net_awesome = jQuery("#social_net_awesome_input").val();
		var social_net_url = jQuery("#social_net_url_input").val();
		var social_net_tooltip = jQuery("#social_net_tooltip_input").val();
		if ( social_net_url != "" && (social_net_icon_path != "" || social_net_awesome != "" ) ) {
			var dataString = 'social_net_icon_path=' + social_net_icon_path + 
							'&social_net_awesome=' + social_net_awesome +
							'&social_net_url=' + social_net_url +
							'&social_net_tooltip=' + social_net_tooltip +
							'&counter_social_network=' + counter_social_network +
							'&action=add_social_icon';
			//jQuery("#loading").html("<img src='"+theme_url+"/images/admin/ajax_loading.gif' />");
            jQuery.ajax({
                type:"POST",
                url: admin_url,
				data: dataString,
                success:function(response){
					jQuery("#social_network_area").append(response);
					jQuery("#social_net_icon_path_input").val("");
					jQuery("#social_net_awesome_input").val("");
					jQuery("#social_net_url_input").val("");
					jQuery("#social_net_tooltip_input").val("");
					closepopedup_social('add_social_link');
                }
            });
            //return false;
		}
	}
	
var counter_banners = 0;
function px_add_banner_add(admin_url){
	counter_banners++;
	jQuery(".add_banner_link").hide();
	jQuery(".close_banner_link").show();
	var banner_type_input = jQuery("#banner_type_input").val();
	var banner_title_input = jQuery("#banner_title_input").val();
	var banner_image_url = jQuery("#banner_image_url").val();
	var banner_url_input = jQuery("#banner_url_input").val();
	var adsense_input = jQuery("#adsense_input").val();
	if ( banner_image_url != "" || adsense_input != "" ) {
		var dataString = 'banner_type_input=' + banner_type_input + 
						'&banner_title_input=' + banner_title_input +
						'&banner_image_url=' + banner_image_url +
						'&banner_url_input=' + banner_url_input +
						'&adsense_input=' + adsense_input +
						'&counter_banners=' + counter_banners +
						'&action=add_banner_ad';
		//jQuery("#loading").html("<img src='"+theme_url+"/images/admin/ajax_loading.gif' />");
		jQuery.ajax({
			type:"POST",
			url: admin_url+"/admin-ajax.php",
			data: dataString,
			success:function(response){
				jQuery("#banner_ads_area").append(response);
				jQuery("#banner_type_input").val("");
				jQuery("#banner_title_input").val("");
				jQuery("#banner_image_url").val("");
				jQuery("#banner_url_input").val("");
				jQuery("#adsense_input").val("");
				closepopedup_social('add_banner_link');
			}
		});
		//return false;
	}
}




// background options
function px_toggle_bg_options(id){
			
		for ( var i = 1; i <= 5; i++ ) {
			jQuery("#home_v"+i).hide();
		}
		if (id=="no-image"){
			jQuery("#home_v1").show();
			
		} else if (id=="custom-background-image"){
			jQuery("#home_v3").show();
		
		} else if (id=="background_video"){
			jQuery("#home_v2").show();
		
		} else if (id=="background_gallery"){	
			jQuery("#home_v5").show();
			
		} else if (id=="featured-image"){	
			jQuery("#home_v4").hide();
			
		} else if (id=="default-options"){	
			jQuery("#home_v4").hide();
				
		} else {
			jQuery("#home_v4").show();
		}		
}

	function select_bg(){
		var $ = jQuery;
		jQuery('input[name="bg_img"]').change(function(){
			jQuery(this).parent().parent().find(".check-list").removeClass("check-list");
			jQuery(this).siblings("label").children("#check-list").addClass("check-list");
		});
	}
	function select_bg2(){
		var $ = jQuery;
		jQuery('input[name="default_header"]').change(function(){
			jQuery(this).parents(".to-field").find("span").removeClass("check-list");
			jQuery(this).siblings("label").children("#check-list").addClass("check-list");
		});
	}
	function select_pattern(){
		var $ = jQuery;
		jQuery('input[name="pattern_img"]').change(function(){
			jQuery(this).parent().parent().find(".check-list").removeClass("check-list");
			jQuery(this).siblings("label").children("#check-list").addClass("check-list");
		});
	}
	
	var counter_reviews = 0;
	function add_review_to_list(admin_url, theme_url){
		counter_reviews++;
		var dataString = 'counter_reviews=' + counter_reviews + 
		'&var_pb_review_title=' + jQuery("#var_pb_review_title").val() +
		'&var_pb_review_points=' + jQuery("#var_pb_review_points").val() +'&action=px_add_review_to_list';
	
		jQuery("#loading").html("<img src='"+theme_url+"/images/admin/ajax_loading.gif' />");
		jQuery.ajax({
			type:"POST",
			url: admin_url+"/admin-ajax.php",
			data: dataString,
			success:function(response){
				jQuery('.px-album-table').show();
				jQuery("#total_tracks").append(response);
				jQuery("#loading").html("");
				closepopedup('add_track');
				jQuery("#var_pb_review_title").val("Title");
				jQuery("#var_pb_review_points").val("");
			}
		});
		//return false;
	}
	
	function new_toggle_inside_post(id){
		if (id=="Single Image"){
			jQuery("#inside_post_thumb_image, #inside_post_thumb_audio, #inside_post_thumb_video, #inside_post_thumb_slider, #inside_post_thumb_map").hide();
			jQuery("#inside_post_thumb_image").show();
		}
		else if (id=="Audio"){
			jQuery("#inside_post_thumb_image, #inside_post_thumb_audio, #inside_post_thumb_video, #inside_post_thumb_slider, #inside_post_thumb_map").hide();
			jQuery("#inside_post_thumb_audio").show();
		}
		else if (id=="Video"){
			jQuery("#inside_post_thumb_image, #inside_post_thumb_audio, #inside_post_thumb_video, #inside_post_thumb_slider, #inside_post_thumb_map").hide();
			jQuery("#inside_post_thumb_video").show();
		}
		else if (id=="Slider"){
			jQuery("#inside_post_thumb_image, #inside_post_thumb_audio, #inside_post_thumb_video, #inside_post_thumb_slider, #inside_post_thumb_map").hide();
			jQuery("#inside_post_thumb_slider").show();
		}
		else if (id=="Map"){
			jQuery("#inside_post_thumb_image, #inside_post_thumb_audio, #inside_post_thumb_video, #inside_post_thumb_slider, #inside_post_thumb_map").hide();
			jQuery("#inside_post_thumb_map").show();
		}
		else jQuery("inside_post_thumb_image, #inside_post_thumb_audio, #inside_post_thumb_video, #inside_post_thumb_slider, #inside_post_thumb_map").hide();
	}
	
	
	jQuery(document).ready(function() {
				
			jQuery( '#wrapper_boxed_layoutoptions1' ).click(function() {
				
				var theme_option_layout = jQuery( '#wrapper_boxed_layoutoptions1 input[name=layout_option]:checked' ).val();
				
				if( theme_option_layout == 'wrapper_boxed'){
					
					jQuery("#layout-background-theme-options").show();
				} else {
					jQuery("#layout-background-theme-options").hide();
					
				}
				
			});
			
			jQuery( '#wrapper_boxed_layoutoptions2' ).click(function() {
				
				
				
				var theme_option_layout = jQuery( '#wrapper_boxed_layoutoptions2 input[name=layout_option]:checked' ).val();
				
				if( theme_option_layout == 'wrapper_boxed'){
					
					jQuery("#layout-background-theme-options").show();
				} else {
					jQuery("#layout-background-theme-options").hide();
					
				}
				
			});
	});

