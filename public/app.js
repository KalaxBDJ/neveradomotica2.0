$(function()
{

    $('#getTemperatura').on('click',function(){

        $.ajax(
            {
                url:'/mediciones',
                type:'GET',
                success: function(datos)
                {
                    let tbody = $('tbody')
                    tbody.html('')
                    datos.forEach(dato=>{
                        if(dato.category=='temperatura')
                        {
                            tbody.append(`
                            <tr>
                                <td class="created_at">${dato.created_at   }</td>
                                <td class="value">${dato.value}</td>
                                <td class="category">${dato.category}</td>
                                <td class="id">${dato._id}</td>
                                <td>
                                    <button class="delete-button">DELETE</button>
                                </td>
                            </tr>
                            `);
                        }
                    })
                    
                    
                    
                    
                }   
            })

    })

    $('#getPeso').on('click',function(){

        $.ajax(
            {
                url:'/mediciones',
                type:'GET',
                success: function(datos)
                {
                    let tbody = $('tbody')
                    tbody.html('')
                    datos.forEach(dato=>{
                        if(dato.category=='peso')
                        {
                            tbody.append(`
                            <tr>
                                <td class="created_at">${dato.created_at   }</td>
                                <td class="value">${dato.value}</td>
                                <td class="category">${dato.category}</td>
                                <td class="id">${dato._id}</td>
                                <td>
                                    <button class="delete-button">DELETE</button>
                                </td>
                            </tr>
                            `);
                        }
                    })
                    
                    
                    
                    
                }   
            })

    })
        
    
})