const express = require("express"); //modul express
const app = express(); //function express
const port = 3000;
const expressLayouts = require("express-ejs-layouts");

// Express Static
app.use(express.static("public"));

//Set modul expressLayouts
app.use(expressLayouts);
app.set("layout", "./layout/fullLayout");

app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

//set EJS
app.set("view engine", "ejs");

const contact = [
  {
    name: "Muhamad Rizki Ramadhan",
    email: "rizkiramadhan350@gmail.com",
  },
  {
    name: "Iqbal",
    email: "iqbal@gmail.com",
  },
  {
    name: "Taufik",
    email: "Taufik@gmail.com",
  },
];

// '/' meaning root
app.get("/", (req, res) => {
  // res.send('Hello World!')
  res.render("index", {
    pageName: "Home Page",
  });
});

//memanggil halaman contact
app.get("/contact", (req, res) => {
  // res.send('<h1> Halaman contact </h1>');
  res.render("contact", {
    contact,
    pageName: "Contact Page",
  });
});

//memanggil halaman about
app.get("/about", (req, res) => {
  // res.send('<h1> Halaman About </h1>');
  res.render("about", {
    pageName: "About Page",
  });
});

//memanggil halaman menggunakan roote parameter
app.get("/product/:productID/category/:categoryID", (req, res) => {
  // res.send('<h1> Halaman contact </h1>');
  res.send(req.params);
});

app.use("/", (req, res, next) => {
  res.status(404);
  res.send("Page Not Foung: 404");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// const http = require('http');
// const fs = require('fs');

// const pindahHalaman = (page, res) => {
//   fs.readFile(page, (err, data) => {
//     if (err) {
//       res.writeHead(404);
//       res.write('Error! Page Not Found')
//     } else {
//       res.write(data);
//     }
//     res.end();
//   });
// }

// http.createServer((req, res) => {
//   const url = req.url;
//   res.writeHead(200, {
//     'Content-Type': 'text/html'
//   });
//   if (url === '/about') {
//     pindahHalaman('about.html', res)
//   } else if (url === '/contact') {
//     pindahHalaman('contact.html', res)
//   } else {
//     pindahHalaman('index.html', res)
//   }
// }).listen(3000, () => {
//   console.log('Server is listening on port 3000');
// });
