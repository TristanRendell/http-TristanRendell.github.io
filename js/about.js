$(function() {

	// init controller
	var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onCenter"}});

	// build scenes
	new ScrollMagic.Scene({triggerElement: "#parallax1", duration: "200%"})
					.setTween("#parallax1bg", {y: "50%", ease: Linear.easeNone})
					// .addIndicators()
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#julian_trigger", duration: "200%"})
					.setTween("#parallax2bg", {y: "75%", ease: Linear.easeNone})
					// .addIndicators()
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#sarah_trigger", duration: "200%"})
					.setTween("#parallax3bg", {y: "75%", ease: Linear.easeNone})
					// .addIndicators()
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#julian_trigger", duration:0, offset:100})
        			.addTo(controller)
        			.triggerHook("onCenter")
        			.setTween(TweenMax.from("#julian_pic", 2, {rotation:-360, scale: 0, ease: Elastic.easeOut, delay: 0.5}))
	 				.addIndicators({name:"Julian"}) // add indicators (requires plugin)

	new ScrollMagic.Scene({triggerElement: "#sarah_trigger", duration:0})
        			.addTo(controller)
        			.triggerHook("onCenter")
        			.setTween(TweenMax.from("#sarah_pic", 2, {rotation:-360, scale: 0, ease: Elastic.easeOut, delay: 0.5}))
	 				// .addIndicators({name:"Sarah"}) // add indicators (requires plugin)



    // reveal the 'pop' icons
    $(".pop").each(function(i) { $(this).css({"visibility":"visible"})});


});