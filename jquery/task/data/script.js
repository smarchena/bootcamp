$(document).ready( function () { 

    $('#button-addon2').click(function () {
        let  val = $('#input1').val()
        $('#table').append(`          
                <tr>
                    <ul id="ul">
                        ${val}
                    </ul>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
               
            `)
    })
})