const { render } = require('ejs');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mysql = require('mysql')
const nodemailer = require('nodemailer')

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/public"));
app.use(express.json());

app.use(express.urlencoded({extended:false}))

/*Rutas*/
app.get('/', (req, res) => res.render('pages/index'));
app.get('/About', (req, res) => res.render('pages/acercade'));
app.get('/Help', (req, res) => res.render('pages/ayuda'));
app.get('/Download', (req, res) => res.render('pages/descargar'));
app.get('/Sign-up', (req, res) => res.render('pages/sign-up'));
app.get('/WebPlayer', (req, res) => res.render('pages/webPlayer'));

//conexion
// const connection = mysql.createConnection({
//     host: 'freedb.tech',
//     user: 'freedbtech_AlusiX',
//     password: 'E.cAv7!6ix6cs4g',
//     database: 'freedbtech_AlusiX'
// })
// connection.connect(error => {
//     if (error) throw error;
//     console.log('Database running');
// })

//    app.get('/peticiones', (req, res) => {
//       const sql = 'Select * From sugerencias';
//        connection.query(sql, (error, results) => {
//            if (error) {
//                throw error;
//             }
//            res.render('pages/peticiones', {
//                'results': results
//            })
//         } )
//   });

//    app.post('/peticiones', (req, res) => {

//       const sql = `SELECT * FROM sugerencias WHERE mail = '${req.body.mail}'`;
//       const sql2 = `INSERT INTO sugerencias SET ?`;

//       const { name,mail,phoneNumber, description} = req.body;

//       contentHTML = `
//           <h1>Client info</h1>
//           <ul>
//               <li>Name: ${name}</li>
//               <li>Email: ${mail}</li>
//               <li>Phone number: ${phoneNumber}</li>
//           </ul>
//           <p>
//               ${description}
//           </p>
//       `
//       const transporter = nodemailer.createTransport({
//           service: "gmail",
//           auth: {
//               user: "alusixinc@gmail.com",
//               pass: "AlusiX1001"
//           }
//       });
//       const info = {
//           from: "alusixinc@gmail.com",
//           to: "albertdija@gmail.com",
//           subject:"Community Petition",
//           html:contentHTML
//       }
//        connection.query(sql, (error, results) => {
//            if (error) {
//                throw error;
//            }
//            if(!results.length > 0){
//               const modelsObj = 
//               {
//                   fname: req.body.name,
//                   mail: req.body.mail,
//                   phone: req.body.phoneNumber
//              }

//               connection.query(sql2, modelsObj, error => {
//                  if (error) {
//                       throw error;
//                   }
//               });
//             }
//               transporter.sendMail(info, error => {
//                   if (error) 
//                   {
//                       throw error;
//                   } else 
//                   { 
//                       console.log('email enviado')
//                   }
//               });
//           });
//           res.render('pages/index');
//        });


app.listen(port, () => console.log(`Example app listening on port 3000!`));