$(document).ready(function () {
    $('#table').hide()

    $('#button-add').click(function () {
        let inputName = $('#nombre').val()
        let gender = $('#select').val()
        let inputYear = $('#año').val()
        let inputMoney = $('#valor').val()

        $('#table').show().append(`            
            <tr class='child'>
                <th>${inputName}</th>
                <th>${gender}</th>
                <th>${inputYear}</th>
                <th>$${inputMoney}</th>                
            </tr>`
        )

        $('#nombre').val('')
        $('#select').prop('selectedIndex', 0)
        $('#año').val('')
        $('#valor').val('')
    })

    $('#button-clean').click(function () {
        $('.child').remove()
        $('#table').hide()
    })
})