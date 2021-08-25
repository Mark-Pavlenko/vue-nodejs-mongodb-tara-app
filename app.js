const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const fileUpload = require('express-fileupload');
const path = __dirname + '/app/views/';
const app = express();

app.use(express.static(path));
app.use(cors());
app.use(fileUpload());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

const db = require("./app/models");

db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

app.get("/", (req, res) => {
    res.json({message: "Hello from the server-side!"});
});

require("./app/routes/turorial.routes")(app);

app.post('/upload', (req, res) => {

    const myFile = req.files.file;

    if (!req.files) {
        return res.status(500).send({msg: "file is not found"})
    }

    console.log('sending image name: ' + myFile.name);

    // Use the mv() method to place the file somewhere on your server
    myFile.mv(`${__dirname}/app/images/${myFile.name}`, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({msg: "smth went wrong!"});
        }
        return res.send({file: myFile.name, path: `/${myFile.name}`, ty: myFile.type});
    });
});

//deleting image function
const fs = require('fs');

app.post('/delete/image', (req, res) => {

    const deletedImage = req.body;

    // if (!req.files) {
    //     return res.status(500).send({msg: "file is not found"})
    // }

    // console.log('image name for deleting: ' + deletedImage.name);


        // here will be image name (sent like parameter)
        const imgBaseUrl = `./app/images/${deletedImage.name}`

        fs.unlink(imgBaseUrl, (err) => {
            if (err) {
                console.error(err)
                return
            } else {
                console.log('Image was successfully deleted');
            }
        });


// //function of delete img
//     fs.unlink(imgBaseUrl, (err) => {
//         if (err) {
//             console.error(err)
//             return
//         } else {
//             console.log('Image was successfully deleted');
//         }
//     });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
