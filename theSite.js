var chicagoBubbleImage = document.getElementById('bubblesImage');

$('document').ready(function() {
    $(chicagoBubbleImage).hide().fadeIn(2500);
});

/** Getting the website selection*/

var selection = document.querySelectorAll("#webProjects .siteEl");

function hoverOnSite1() {
  $(selection).eq(0).animate({
    opacity: 0.5
  }, "fast");
}
function outOnSite1() {
  $(selection).eq(0).animate({
    opacity: 1.0
  }, "fast");
}

function hoverOnSite2() {
  $(selection).eq(1).animate({
    opacity: 0.5
  }, "fast");
}
function outOnSite2() {
  $(selection).eq(1).animate({
    opacity: 1.0
  }, "fast");
}

function hoverOnSite3() {
  $(selection).eq(2).animate({
    opacity: 0.5
  }, "fast");
}
function outOnSite3() {
  $(selection).eq(2).animate({
    opacity: 1.0
  }, "fast");
}

function hoverOnSite4() {
  $(selection).eq(3).animate({
    opacity: 0.5
  }, "fast");
}
function outOnSite4() {
  $(selection).eq(3).animate({
    opacity: 1.0
  }, "fast");
}

selection[0].addEventListener("mouseover", hoverOnSite1, false);
selection[0].addEventListener("mouseout", outOnSite1, false);
selection[1].addEventListener("mouseover", hoverOnSite2, false);
selection[1].addEventListener("mouseout", outOnSite2, false);
selection[2].addEventListener("mouseover", hoverOnSite3, false);
selection[2].addEventListener("mouseout", outOnSite3, false);
selection[3].addEventListener("mouseover", hoverOnSite4, false);
selection[3].addEventListener("mouseout", outOnSite4, false);

/**var siteSelect = document.getElementsByClassName("siteEl")[0];
var siteSelect2 = document.getElementsByClassName("siteEl")[1];
function hoverOnSite1() {
  $(siteSelect).animate({
    opacity: 0.5
  }, "fast");
}
function outOnSite1() {
  $(siteSelect).animate({
    opacity: 1.0
  }, "fast");
}
function hoverOnSite2() {
  $(siteSelect2).animate({
    opacity: 0.5
  }, "fast");
}
function outOnSite2() {
  $(siteSelect2).animate({
    opacity: 1.0
  }, "fast");
}
siteSelect.addEventListener("mouseover",hoverOnSite1,false);
siteSelect.addEventListener("mouseout",outOnSite1,false);
siteSelect2.addEventListener("mouseover",hoverOnSite2,false);
siteSelect2.addEventListener("mouseout",outOnSite2,false);*/
