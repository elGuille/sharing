"use strict";

window.addEventListener('load', function() {
//------------------------------------------------------------------------
//						TOOGLE BUTTON SCRIPT
//------------------------------------------------------------------------

$(".toogle-btn").on('click', function (e) {
    e.preventDefault();
    var href = $(this).attr('href');
    $(href).toggleClass("show");
});

$(".toogle-btn.close").on('click', function (e) {
    e.preventDefault();
    $(this).parent().toggleClass("show");
});

//------------------------------------------------------------------------
//						MENU TAP ON MOBILE DEVICES
//------------------------------------------------------------------------

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $("nav.navbar").addClass("touchmenu");
    $(".sub-menu-link").on('click', function (e) {
        e.preventDefault();
        $(this).parent().toggleClass("tap");
    });
}

//------------------------------------------------------------------------
//                      PROFILE PIC
//------------------------------------------------------------------------

const queryString = window.location.search;
// console.log(queryString);

const urlParams = new URLSearchParams(queryString);

// const un = urlParams.get('un')
// console.log(un);
// // username

// const pp = urlParams.get('pp')
// console.log(pp);
// // product picture

// const id = urlParams.get('id')
// console.log(id);
// // post id

// const c = urlParams.get('c')
// console.log(c);
// // caption

// const opA = urlParams.get('01a')
// console.log(opA);
// // option A


// const opB = urlParams.get('01b')
// console.log(opB);
// // option B



//------------------------------------------------------------------------
//                      VIDEO SELECT OPTIONS
//------------------------------------------------------------------------


const video = document.querySelector('video')
const source = document.querySelector('source')

video.appendChild(source);
  $("#vid1")[0].load();
// video.play()

const changeVideoButtonA = document.querySelector('#changeVideoA')
changeVideoA.addEventListener('click', e => {
  video.pause()
   var videoA =  $('input#videoA').val();
    var source = document.createElement('source');
    console.log('videoA: '+videoA);
    source.setAttribute('src',videoA)
     $("#vid1").html(source);
    $("#vid1")[0].load();
    video.load()
    video.play();

    $('#changeVideoA').hide();
    $('#changeVideoB').hide();
    $('#changeVideoC').show();
})

const changeVideoButtonB = document.querySelector('#changeVideoB')
changeVideoB.addEventListener('click', e => {
  video.pause()
  var videoB =  $('input#videoB').val();
   var source = document.createElement('source');
  source.setAttribute('src', videoB);
   $("#vid1").html(source);
   console.log('videoB: '+videoB);
    $("#vid1")[0].load();
  video.load()
  video.play()
  $('#changeVideoA').hide();
  $('#changeVideoB').hide();
    $('#changeVideoC').show();

});

const changeVideoButtonC = document.querySelector('#changeVideoC')
changeVideoC.addEventListener('click', e => {
  video.pause()
  var videoC =  $('input#videoC').val();
   var source = document.createElement('source');
  source.setAttribute('src', videoC);
    $("#vid1").html(source);
  console.log('videoC: '+videoC);
     $("#vid1")[0].load();
  video.load()
  video.play();
      $('#changeVideoC').hide();

  $('#changeVideoA').show();
  $('#changeVideoB').show();

})


//------------------------------------------------------------------------
//						SHOW NAVIGATION ON SCROLL DOWN
//------------------------------------------------------------------------

var $window = $(window);
$window.on('scroll', function () {
    var $nav = $('nav.show-on-scroll');
    var height = $nav.outerHeight();
    var scrollTop = $window.scrollTop();
    if (scrollTop > height*2) {
        $nav.addClass('show');
    } else {
        $nav.removeClass('show');
    }

});


//------------------------------------------------------------------------
//						HIDE NAVIGATION ON SCROLL DOWN
//------------------------------------------------------------------------

var prev = 0;
var $window = $(window);
$window.on('scroll', function () {
    var nav = $('nav.hide-on-scroll');
    var scrollTop = $window.scrollTop();
    nav.toggleClass('hide', scrollTop > prev);
    prev = scrollTop;
});



//------------------------------------------------------------------------
//						STICKY NAVIGATION
//------------------------------------------------------------------------

// Custom
window.stickyToggle = function (sticky, stickyWrapper, scrollElement) {
    var stickyHeight = sticky.outerHeight();
    var stickyWrapperHeight = stickyWrapper.outerHeight();
    var stickyTop = stickyWrapper.offset().top - stickyHeight + stickyWrapperHeight;
    if (scrollElement.scrollTop() >= stickyTop) {
        stickyWrapper.height(stickyHeight);
        sticky.addClass("fixed-top");
    } else {
        sticky.removeClass("fixed-top");
        stickyWrapper.height('auto');
    }
};

// Find all data-toggle="sticky-onscroll" elements
$('.sticky-top').each(function () {
    var sticky = $(this);
    var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
    if (!sticky.next().hasClass('sticky-wrapper')) {
        sticky.after(stickyWrapper);
    } else {
        stickyWrapper = sticky.next();
    }

    window.stickyTB = window.stickyToggle.bind(window, sticky, stickyWrapper, $(window));
    // Scroll & resize events
    $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', window.stickyTB);

    // On page load
    window.stickyToggle(sticky, stickyWrapper, $(window));
});


});
var pAgree = '1';
window.addEventListener('load', function() {
	$('a.smooth').smoothScroll({speed: 800});
});

$(function(){
  var user  = getUrlParam('u');
  var profile_pic = 'https://d2gwdfqjh6f8qk.cloudfront.net/profilePics/'+getUrlParam('pp')+'.jpeg';
  var pid = 'https://d2gwdfqjh6f8qk.cloudfront.net/'+ getUrlParam('p_id')+'/'+getUrlParam('p_id')+'_000.mp4';
   var pid_b = 'https://d2gwdfqjh6f8qk.cloudfront.net/'+ getUrlParam('p_id')+'/'+getUrlParam('p_id')+'_01A.mp4';
   var pid_c = 'https://d2gwdfqjh6f8qk.cloudfront.net/'+ getUrlParam('p_id')+'/'+getUrlParam('p_id')+'_01B.mp4';
  var cover_pic = 'https://d2gwdfqjh6f8qk.cloudfront.net/'+ getUrlParam('p_id')+'/'+getUrlParam('p_id')+'_thumbImage.jpg';

  var vd =  getUrlParam('vd');
  var opt_a = getUrlParam('opt_a');
    var opt_b = getUrlParam('opt_b');

  $('#changeVideoA').html(decodeURI(opt_a));
   $('#changeVideoB').html(decodeURI(opt_b));
   $('#imgid').attr('src',decodeURI(profile_pic));
   $('#suser').html(decodeURI(user));
   $('#udesc').html(decodeURI(vd));
   var video = $('video#vid1');
   console.log(pid);
   var source = document.createElement('source');
        console.log(pid);
      $(video).attr('poster',cover_pic);
    source.setAttribute('src',pid);
       $(video).html(source);
    $("#vid1")[0].load();
     $("#vid1")[0].play();
    $('input#videoB').val(pid_c);
    $('input#videoA').val(pid_b);
    $('input#videoC').val(pid);

    // setTimeout(function(){
 
    // },1000);
   // video.pause();
   // $('video#vid1').find('source').attr('src',pid);
   // video.load();
   // video.play();
   // $('#udesc').html(vd);

})

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}