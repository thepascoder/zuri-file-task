
const http = require('http')
const fs = require('fs')


let url = 'http://jsonplaceholder.typicode.com/posts'


http.get(url, function (res) {

    
    let data = ''




    res.on('data', function (chunkOfData) {
        data = data + chunkOfData
    })



    res.on('end', function () {




        fs.writeFile('result/posts.json', data, function (err) {
            if (err) throw err
            console.log('Successfully wrote the posts to resul/posts.json')
        })
    })



}).on('error', function (err) {
    console.log(err)
   
     


})
