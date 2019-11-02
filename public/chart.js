// Code goes here

var lbls = []
var datoschar = []
var contador = 0;


        $.ajax({
            url: '/mediciones',
            type: 'GET',
            success : (datos)=>{
                datos.forEach(dato=>{
                    if(dato.category=='temperatura')
                    {
                        lbls.push(contador)
						datoschar.push(dato.value)
						contador++;
					}
					
                })
                drawit()
            }
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
		});
		
	}
	
	
