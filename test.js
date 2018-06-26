/*
Challenge: Write a filter sort function that produces the following output based on
the given input below
		[
			{ 'name': 'visitor' },
			{ 'name': 'visit' },
			{ 'name': 'revenue' },
			{ 'name': 'atc' },
			{ 'name': 'conversion' }
		]
*/
// Given the following inputs
var selected = ['atc', 'revenue', 'conversion', 'visit', 'visitor'];
var required = ['visitor', 'visit', 'assigned', 'revenue'];
var displayable = [
	{ 'name': 'atc' },
	{ 'name': 'assigned' },
	{ 'name': 'revenue' },
	{ 'name': 'visitor' },
	{ 'name': 'visit' },
	{ 'name': 'conversion' },
	{ 'name': 'homepage' },
	{ 'name': 'search' }
];
var filterDisplayable = function (selected, displayable) {
	return displayable.filter((item) => {
    return selected.includes(item.name);
  });
}
var prioritySortDisplayable = function (required, filteredResults) {
	filteredResults.map(filteredResult => {
  	const index = required.indexOf(filteredResult.name);
  	filteredResult.order = index >= 0 ? index: required.length;
  });
  filteredResults.sort(function(a, b){
    if (a.order < b.order) { return -1; }
    if (a.order > b.order) { return 1; }
    return 0;
  });
	return filteredResults;
}
var result = prioritySortDisplayable(required, filterDisplayable(selected, displayable));

var renderTable = function (items) {
	let tbl = document.getElementById("displayId"),
			tr = tbl.insertRow();
	for (var i = 0; i < items.length; i++) {
			let td = tr.insertCell();
				td.appendChild(document.createTextNode(items[i].name));
				td.setAttribute('class','displayStyle');
	}
}
renderTable(result);
