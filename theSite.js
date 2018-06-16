var chicagoBubbleImage = document.getElementById('bubblesImage');

$('document').ready(function() {
    $(chicagoBubbleImage).hide().fadeIn(2500);
});

//Creating the coming soon element and object
var comingSoonEl = document.createElement('SPAN');
var comingSoonTextEl = document.createTextNode('(coming soon)');

comingSoonEl.appendChild(comingSoonTextEl);

var comingSoonString = document.getElementsByTagName('li')[1];
$('document').ready(function() {
    $(comingSoonString).after(comingSoonEl);
});
