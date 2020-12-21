//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
// require turbolinks
//= require_tree .
/* global $ */
/* global jQuery */

 $('.slider').slick({
   autoplay: true,
	  autoplaySpeed: 6000,
   arrows: true,
   prevArrow:'<div class="prev slider-arrow"></div>',
	  nextArrow:'<div class="next slider-arrow"></div>',
	  dots:true
 });