var express = require('express');
var bodyParser = require('body-parser');
const multiparty = require('multiparty');
const xlsx = require('xlsx');
var writeFile = require('./writeFile.js')
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 9467;

app.use(express.static(__dirname));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/make-email-resouce',(req,res)=>{
    const form = new multiparty.Form({
        autoFiles: true,
    });

    form.on('file', (name, file) => {
        const workbook = xlsx.readFile(file.path);
        const sheetName = workbook.SheetNames[0];

        jsonData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

        writeFile.makeEmailResouce(jsonData,(err)=> {
            if (err) throw err
            res.status(200).set("Content-Type", "text/html").send('정상적으로 처리되었습니다.')
        })

    });

    form.parse(req);

})

http.listen(port, () => {
    console.log(`server running at http://localhost:${port}/`);
});

