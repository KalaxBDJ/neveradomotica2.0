$(function()
{
        $.ajax(
        {
            url:'/mediciones',
            type:'GET',
            success: function(datos)
            {
                console.log(datos)
                datos.forEach(dato=>{
                    console.log(dato.created_at )
                })
                
                
                
            }   
        })
    
})