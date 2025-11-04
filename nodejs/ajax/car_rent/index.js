const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.post('/alquiler', function (req, res) {
    let price = parseFloat(req.body.hour) * 20
    res.send(`
        <tr>
            <td><img src="${req.body.img}" alt="imagen${req.body.select}" style="width:200px; height:auto;"></td>
            <th scope="row"> ${req.body.select} </th>
            <th scope="row">${req.body.hour}</th>
            <th scope="row">$${price}</th>   
            <th scope="row"><button type="button" class="btn btn-outline-info" id="btn-update" name="update">Update</button>
            <button type="button" class="btn btn-outline-danger" id="btn-delete" name="delete">Delete</button></th>       
        </tr>`
    )
})

app.post('/update', function(req, res){
    res.send(`Los datos del${req.body.select}se han actualizado correctamente.`)
    console.log(`Los datos del${req.body.select}se han actualizado correctamente.`)
})
app.post('/delete', function(req, res){
    res.send(`Los datos del${req.body.select}se han eliminado correctamente.`)
    console.log(`Los datos del${req.body.select}se han eliminado correctamente.`)
})

app.listen(3000)