
/*Automatically updates the copyright year*/
var yearDate = new Date();
var year = yearDate.getFullYear();

var el = document.getElementById("yearDate");
el.textContent = year;

//Script to change published works out of coming Soon
var renamePublished = document.getElementById("PublishedWorksButton");
var elRename = "Published Work";
renamePublished.textContent = elRename;
