// Code goes here
var lbls = []
var datoschar = []


        $.ajax({
            url: '/mediciones',
            type: 'GET',
            success : (datos)=>{
                datos.forEach(dato=>{
                    if(dato.category=='temperatura')
                    {
                        lbls.push(dato.created_at)
                        datoschar.push(dato.value)
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
					fillColor : "rgba(29, 237, 240, 0.36)",
					strokeColor : "rgba(29, 237, 240, 0.45)",
					pointColor : "rgba(29, 237, 240, 085)",
					pointStrokeColor : "#fff", 
					pointHighlightFill : "#fff",
                    pointHighlightStroke : "rgba(151,187,205,1)",
					data : datoschar
				}
			]

		};
		
		

	    function drawit(){
		var ctx = document.getElementById("canvas").getContext("2d");
		window.myLine = new Chart(ctx);
		myLine.Line(lineChartData, {
			responsive: true
		});
		
	}
	
	
