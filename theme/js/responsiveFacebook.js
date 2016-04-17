// based on http://www.praxis.net.au/blog/making-the-facebook-page-plugin-responsive/
// but hacked to reload a containing iframe- to work-around CORS issues when 
// developing the site on localhost.
// The linked articles approach is better, but I don't know if it'll work 
// when live- maybe you need to register a FB app to make XHTTPRequests work??

$(window).resize(function() {
   if(this.resizeTO) clearTimeout(this.resizeTO);
   this.resizeTO = setTimeout(function() {
      $(this).trigger('resizeEnd');
   }, 500);
});

$(window).bind('resizeEnd', function() {

	var $fbif = $('#facebookiframe');
   $($fbif).fadeOut("slow", function() {
      	$($fbif).attr('src', $($fbif).attr('src'));
	    $($fbif).fadeIn("slow");
   });
});


