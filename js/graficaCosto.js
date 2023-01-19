window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer",
	{
		title:{
			text: "Costo aproximado",
			verticalAlign: 'top',
			horizontalAlign: 'left'
		},
		data: [
		{        
			type: "doughnut",
			indexLabelFontColor:"black",
			indexLabelLineColor:"black",
			indexLabelFontSize:12,
			startAngle:180,
			toolTipContent: "{label}:<strong>#percent%</strong>",
			indexLabel: "{label} #percent%",
			dataPoints: [
				{  y: 50, label: "Verificación y validación" },
				{  y: 25, label: "Análisis y Diseño" },
				{  y: 15, label: "Desarrollo" },
				{  y: 10,  label: "Especificación"},
			]
		}
		]
	});
	chart.render();
}
