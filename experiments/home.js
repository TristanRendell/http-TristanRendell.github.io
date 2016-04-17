$(function() {
	var controller = new ScrollMagic.Controller();
	var blockTween = new TweenMax.to('#block', 1.5, {
		backgroundColor: 'red'
	});

	var blockEndTween = new TweenMax.to('#block', 1.5, {
		backgroundColor: 'white'
	});


	var containerScene = new ScrollMagic.Scene({
		triggerElement: '#container'
	})
	.setTween(blockTween)
	.addIndicators()
	.addTo(controller);


	var containerEndScene = new ScrollMagic.Scene({
		triggerElement: '#reset'
	})
	.setTween(blockEndTween)
	.addIndicators()
	.addTo(controller);
});

