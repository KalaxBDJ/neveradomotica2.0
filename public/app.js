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
                    let thead = $('thead')
                    thead.html('')
                    thead.append(`
                    <tr>
                    <th>DATE</th>
                    <th>VALUE</th>
                    <th>CATEGORY</th>
                    <th>MEASURE_ID</th>
                    </tr>
                    `)
                    tbody.html('')
                    datos.forEach(dato=>{
                        if(dato.category=='temperatura')
                        {
                            if(dato.value>=40)
                            {
                                tbody.append(`
                                <tr class="bg-danger">
                                    <td class="created_at">${dato.created_at   }</td>
                                    <td class="value">${dato.value}</td>
                                    <td class="category">${dato.category}</td>
                                    <td class="id">${dato._id}</td>
                                </tr>
                                `);
                            }
                            else
                            {
                                tbody.append(`
                                <tr>
                                    <td class="created_at">${dato.created_at   }</td>
                                    <td class="value">${dato.value}</td>
                                    <td class="category">${dato.category}</td>
                                    <td class="id">${dato._id}</td>
                                </tr>
                                `);
                            }
                            
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
                    let thead = $('thead')
                    thead.html('')
                    thead.append(`
                    <tr>
                    <th>DATE</th>
                    <th>VALUE</th>
                    <th>CATEGORY</th>
                    <th>MEASURE_ID</th>
                    </tr>
                    `)
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
                            </tr>
                            `);
                        }
                    })
                    
                    
                    
                    
                }   
            })

    })
        
    
})