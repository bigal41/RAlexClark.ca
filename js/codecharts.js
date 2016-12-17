//Data
var langData = [
	{
		value: 40,
      highlight:"#F7464A",
      color: "#F62E32",
		label: 'Actionscript'
	},
	{
		value: 30,
      color:"#158BF5",
      highlight: "#46A3F7",
		label: 'Java'
	},
	{
		value: 10,
      color:"#2e32f6",
      highlight: "#464af7",
		label: 'HTML5'
	},
	{
		value: 10,
      color:"#f58115",
      highlight: "#f79b46",
		label: 'Javascript'
	},
	{
		value: 7.5,
      color:"#F51589",
      highlight: "#F746A2",
		label: 'CSS3'
	},
	{
		value: 2.5,
      color:"#31F62E",
      highlight: "#61F85E",
		label: 'mySQL'
	}
	
];

//Data
var frameData = [
	{
		value: 40,
      highlight:"#F7464A",
      color: "#F62E32",
		label: 'Flex'
	},
	{
		value: 25,
      color:"#158BF5",
      highlight: "#46A3F7",
		label: 'Angular'
	},
	{
		value: 15,
      color:"#2e32f6",
      highlight: "#464af7",
		label: 'Bootstrap'
	},
	{
		value: 20,
      color:"#f58115",
      highlight: "#f79b46",
		label: 'Kendo UI'
	}
	
];


//Options

var options = {
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke : true,

    //String - The colour of each segment stroke
    segmentStrokeColor : "#fff",

    //Number - The width of each segment stroke
    segmentStrokeWidth : 2,

    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout : 30, // This is 0 for Pie charts

    //Number - Amount of animation steps
    animationSteps : 100,

    //String - Animation easing effect
    animationEasing : "easeOutBounce",

    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : true,

    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : false,

   // String - Template string for single tooltips
    tooltipTemplate: "<%if (label){%><%=label%><%}%>",

}


//Language Chart
var lctx = $("#langChart").get(0).getContext('2d');
var langChart = new Chart(lctx).Doughnut(langData, options);

//framework Chart
var fctx = $("#frameChart").get(0).getContext('2d');
var frameChart = new Chart(fctx).Doughnut(frameData, options);
