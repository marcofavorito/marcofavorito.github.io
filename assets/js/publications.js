/* Functions to display BibTeX items */

function bibtex(id) {
 $( ".dialog#" + id ).dialog('open');
}

function toggle(type) {
	$("."+type).toggle(300);
}


$(function(){
	$(".dialog").dialog({
	    autoOpen: false,
	    resizable: false,
	    modal: true,
	    width: 'auto'
	});

	// Jekyll-Scholar is quite limited at what you can pass to the
	// template. Therefore, this is a dirty jQuery trick to count
	// the number of publications grouped by type. The HTML template
	// used by Scholar places an empty span into each counter of each
	// type, so onload we can simply count them.
	$(".b-counter").each(function(i, obj) {
		$(this).html($('.b-counter').length - i);
	});

	$(".p-counter").each(function(i, obj) {
		$(this).html($('.p-counter').length - i);
	});

	$(".j-counter").each(function(i, obj) {
		$(this).html($('.j-counter').length - i);
	});

	$(".c-counter").each(function(i, obj) {
		$(this).html($('.c-counter').length - i);
	});

	$(".i-counter").each(function(i, obj) {
		$(this).html($('.i-counter').length - i);
	});
});
