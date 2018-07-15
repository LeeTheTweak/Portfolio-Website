var chicagoBubbleImage = document.getElementById('bubblesImage');

$('document').ready(function() {
    $(chicagoBubbleImage).hide().fadeIn(2500);
});
/** Getting the website selection*/
var siteSelect = document.getElementsByClassName("siteEl")[0];
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
siteSelect2.addEventListener("mouseout",outOnSite2,false);
