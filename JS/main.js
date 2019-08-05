import {CountUp}  from './countUp.js';

//Timeline logic @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
document.querySelectorAll('.timeline-content').forEach(function(element, index){
	(element.getBoundingClientRect().top-window.innerHeight);
	window.addEventListener('scroll',function(){
		var classes = element.classList;
		if(element.getBoundingClientRect().top-window.innerHeight+200 < 0 && !classes.contains('active')){
			element.classList.add('active');
		}
	})
})


//Crate dynamic counting up numbers for the KPI-Section @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// AND SlideIN Top navigation bar on scroll             @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
var options1 = {duration: 5.5,useEasing: true,useGrouping: true,seperator: ',',decimal:','};
var options2 = {duration: 11.5,useEasing: true,useGrouping: true,seperator: ',',decimal:','};

var counter1 = new CountUp('count1',13757,options1);
var counter2 = new CountUp('count2',7020,options1);
var counter3 = new CountUp('count3',7,options2);
var counter4 = new CountUp('count4',1260,options1);
var checkKPI = false;
var togglenavbar = false;

var barvalues = [70,80,70,70,80,60,70,90]
var checkprobar = false;

window.addEventListener('scroll', function(){
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  
  if (((100/scrollable)*scrolled) > 32 && !checkKPI){
	  counter1.start();
	  counter2.start();
	  counter3.start();
	  counter4.start();
	  checkKPI = true;
  }
  if(((100/scrollable)*scrolled) > 3 && !togglenavbar){
	  var elementnavi = document.getElementById("togglenav");
	  elementnavi.classList.add("has-background-white","has-shadow")
	  togglenavbar = true;
  }
  if(((100/scrollable)*scrolled) < 3 && togglenavbar){
	  var elementnavi = document.getElementById("togglenav");
	  elementnavi.classList.remove("has-background-white","has-shadow")
	  togglenavbar = false;
	}
	if(((100/scrollable)*scrolled) > 10 && !checkprobar){
		checkprobar = true;
		for (i=0;i < document.getElementsByClassName("progress").length;i++){
			document.getElementsByClassName("progress")[i]['value'] = barvalues[i]
		}
	}

});


// Bulma Carousel Initiate @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Initialize all div with carousel class

var options = {
	infinite: true,
	autoplay: true,
	autoplaySpeed: 60000, //back to 6000 when not annoyed while coding
	pauseOnHover: true,
	duration: 1200
};

var carousels = bulmaCarousel.attach('.carousel',options);

// Loop on each carousel initialized
for(var i = 0; i < carousels.length; i++) {
	// Add listener to  event
	carousels[i].on('before:show', state => {
		console.log(state);
	});
}

// Access to bulmaCarousel instance of an element
var element = document.querySelector('#my-element');
if (element && element.bulmaCarousel) {
	// bulmaCarousel instance is available as element.bulmaCarousel
	element.bulmaCarousel.on('before-show', function(state) {
		console.log(state);
	});
}
// functional navigation bar (smooth sliding)
document.querySelectorAll('#contactmejumpdown a, #navbarMenuHeroC a').forEach(function(element, index){
	element.addEventListener("click", function(event){
		event.preventDefault();
		var navtargets = element.dataset.target;
		var targetelement = document.getElementById(navtargets);
		targetelement.scrollIntoView({behavior:"smooth"});
	})
})


// Is in viewportfunction
var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
		bounding.top < 250 &&
		bounding.bottom > 250
    );
};


// Set the active navigationbar to active CONTINUE HERE!!!!!!!
document.querySelectorAll('#navbarMenuHeroC a').forEach(function(element, index){
	var navtargets2 = element.dataset.target;
	var targetelement2 = document.getElementById(navtargets2);
	window.addEventListener('scroll',function(event){
		if (isInViewport(targetelement2)){
			element.classList.add('is-active','has-text-weight-medium');
		}
		else {
			element.classList.remove('is-active','has-text-weight-medium');
		}
	})
})



