// Code goes here
 

//Only last 10
var lbls = []
var datoschar = []
var contador = 0;

//All
alllbls=[]
alldatos=[]

$(function()
{
	
	
	$.ajax({
		url: '/mediciones',
		type: 'GET',
		success : (datos)=>{
			
			
			datos.forEach(dato=>{
				if(dato.category=='temperatura')
				{
					alllbls.push(dato.created_at)
					alldatos.push(dato.value)
					contador++;
				}
				
			})

			//Muestro los ultimos Datos de Temperatura
			lbls.push(alllbls[contador-5])
			lbls.push(alllbls[contador-4])
			lbls.push(alllbls[contador-3])
			lbls.push(alllbls[contador-2])
			lbls.push(alllbls[contador-1])
			datoschar.push(alldatos[contador-5])
			datoschar.push(alldatos[contador-4])
			datoschar.push(alldatos[contador-3])
			datoschar.push(alldatos[contador-2])
			datoschar.push(alldatos[contador-1])

			drawit()
			
		}
	})
	
	
})
		

		var lineChartData = {
			labels : lbls,
			datasets : [
				{
					label: "Temperature",
					fillColor : "rgba(15, 243, 255, 0.10)",
					strokeColor : "rgba(15, 243, 255, 1)",
					pointColor : "rgba(15, 243, 255, 1)",
					pointStrokeColor : "#fff", 
					pointHighlightFill : "#fff",
                    pointHighlightStroke : "rgba(151,187,205,1)",
					data : datoschar
				}
			]

		};


	    function drawit(){
		
		var ctx = document.getElementById("canvas").getContext("2d");
		window.myLine = new Chart(ctx,{
			
		});
		myLine.Line(lineChartData, {
			
			responsive: true,
			scaleFontColor: "white",
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			}
		});
		
	}

	
	
