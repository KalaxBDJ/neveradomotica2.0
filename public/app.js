$(function()
{
    $('#getMeasures').on('click',function(){
        $.ajax(
        {
            url:'/mediciones',
            type:'GET',
            success: function(measures)
            {
                console.log(measures)

                measures[0].forEach(dato=>{
                    console.log('Hola Mundo')
                })
                
            }   
        })
    })
})