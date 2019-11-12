var contador=0;
var datapesos = []

$(function() {
    setInterval(()=>{
        
        $.ajax({
            url:'/pesos',
            type:"GET",
            success:function(pesos) {
                pesos.forEach(peso => {
                    datapesos.push(peso.value)
                    contador++;
                })
                let text = $('#text')
                text.html('')
                text.append(`
                    ${datapesos[contador-1]}g
                `)
                
            }
        })
        contador=0
        datapesos=[]
    },3000)
    
})

