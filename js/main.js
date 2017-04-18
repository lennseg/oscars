var data = [];

//make an SVG Container
var svgContainer = d3.select("chart-wrapper").append("svg").attr("width", 115).attr("height", 118);

//daw the Rectangle
var rectangle = svgContainer.append("rect").attr("x", 10).attr("y", 10).attr("width", 50).attr("height", 100);