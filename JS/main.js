import {CountUp}  from './countUp.js';

//Timeline logic @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
document.querySelectorAll('.timeline-content').forEach(function(element, index){
	(element.getBoundingClientRect().top-window.innerHeight);
	window.addEventListener('scroll',function(){
		var classes = element.classList;
		if(element.getBoundingClientRect().top-window.innerHeight+200 < 0 && !classes.contains('active')){
			element.classList.add('active');
		}
	})
})

//ALL Dynamic Scroll events counting up numbers KPI-Section & navigation bar & progressbar @@@@@@@@@@@@
var options1 = {duration: 5.5,useEasing: true,useGrouping: true,seperator: ',',decimal:','};
var options2 = {duration: 11.5,useEasing: true,useGrouping: true,seperator: ',',decimal:','};

var counter1 = new CountUp('count1',13757,options1);
var counter2 = new CountUp('count2',7020,options1);
var counter3 = new CountUp('count3',7,options2);
var counter4 = new CountUp('count4',1260,options1);
var checkKPI = false;
var togglenavbar = false;

var barvalues = [65,80,70,70,80,70,80,90]
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
		var startTime = Date.now();
		for (let i=0;i < document.getElementsByClassName("progress").length;i++){
			const interval = window.setInterval(function (){
				var delta = (Date.now() - startTime) / 1000;
				if (delta > 1 && interval) {
					window.clearInterval(interval);
				}
				document.getElementsByClassName("progress")[i]['value'] = delta * barvalues[i];
			}, 1/60*1000);
		}
	}

});

// Bulma Carousel Initiate @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
var options = {
	infinite: true,
	autoplay: true,
	autoplaySpeed: 6000, //back to 60000 when annoyed while coding
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

// functional navigation bar (smooth sliding) @@@@@@@@@@@@@@@@@@@
document.querySelectorAll('#contactmejumpdown a, #navbarMenuHeroC a').forEach(function(element, index){
	element.addEventListener("click", function(event){
		event.preventDefault();
		var navtargets = element.dataset.target;
		var targetelement = document.getElementById(navtargets);
		targetelement.scrollIntoView({behavior:"smooth"});
	})
})

// Is in viewportfunction @@@@@@@@
var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
		bounding.top < 250 &&
		bounding.bottom > 250
    );
};

// Set the active navigationbar to active & # in URL @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
document.querySelectorAll('#navbarMenuHeroC a').forEach(function(element, index){
	var navtargets2 = element.dataset.target;
	var targetelement2 = document.getElementById(navtargets2);
	window.addEventListener('scroll',function(event){
		if (isInViewport(targetelement2)){
			element.classList.add('is-active','has-text-weight-semibold');
			if (!(window.location.hash == "#" + navtargets2)){
				window.history.pushState(null, null, "#" + navtargets2);
				//dataLayer.push({'event': "VirtualPageView", 'virtualPageURL': window.location.hostname + window.location.pathname + window.location.hash,
				//'virtualPageTitle': navtargets2});
			}
		}
		else {
			element.classList.remove('is-active','has-text-weight-semibold');
		}
	})
});

// Open NavBurger on click @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
document.getElementById("navburger").addEventListener("click",function(event){
	var menu = document.getElementById("navbarMenuHeroC");
	if (menu.classList.contains("open")){
		menu.classList.remove("open");

		window.history.pushState(null, null, urlHash);
	}
	else{
		menu.classList.add("open");
		var elementnavi22 = document.getElementById("togglenav");
		elementnavi22.classList.add("has-background-white","has-shadow");
	}
})

// Detect all clicks on the document when navburger is open@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
var specifiedElement = document.getElementById('navbarMenuHeroC');
var specifiedElement2 = document.getElementById('navburger');
document.addEventListener('click', function(event) {
	var isClickInside = specifiedElement.contains(event.target);
	var isClickInside2 = specifiedElement2.contains(event.target);
	var hasOpenClass = specifiedElement.classList.contains("open");
	if (isClickInside2||isClickInside && hasOpenClass) {
	  return;
	}
	else if (hasOpenClass) {
	  document.getElementById('navbarMenuHeroC').classList.remove('open');
	}
});

// Disable Send Message button again after use @@@@@@@@@@


//Email Logic@@@@@@@@
  var btnSubmit = document.getElementById("btnSubmit");
  btnSubmit.addEventListener('click', function(e) {
    e.preventDefault();
    var valid = true;
	var formData = new FormData();
	var inputs = document.querySelectorAll('.formdata');
    for(var i = 0; i < inputs.length; i++) {
      if(inputs[i].hasAttribute('required') && !(inputs[i].checkValidity())) {
        inputs[i].classList.add('has-error');
		valid = false;
      } else {
        inputs[i].classList.remove('has-error');
	  }
      formData.append(inputs[i].name, inputs[i].value);
    }
    if(valid) {
      performMailerRequest(formData, function(res) {
        if(res) {
          //console.log("mail script response ok!");
          //showFormConfirm(formData);
          //window.dataLayer.push({'event': 'xhrsubmit'});
        }
      });
	}
	btnSubmit.disabled = true;
  });

  const performMailerRequest = function(formData, callback) {
    var request = new XMLHttpRequest();
    var response = false;
    request.open('POST', '/mail.php');
    request.send(formData);
    request.onload = function() {
      if(this.responseText == "check=ok") {
		response = true;
      }
      callback(response);
    };
  }