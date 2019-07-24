import {CountUp}  from './countUp.js';

// Progressbar Logic@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*var progressArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function fillProgress() {
  progressArr.forEach(function(num, index) {
    setTimeout(function() {
      $('#progress-bar').val(num);
    }, 2000 * index);
  });
}

fillProgress(); */


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
	  elementnavi.classList.add("has-background-white")
	  togglenavbar = true;
  }
  if(((100/scrollable)*scrolled) < 3 && togglenavbar){
	  var elementnavi = document.getElementById("togglenav");
	  elementnavi.classList.remove("has-background-white")
	  togglenavbar = false;
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


