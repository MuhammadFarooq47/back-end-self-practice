const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const Register = require('./models/registration');
require('./db/mongoose')

const port = process.env.PORT || 1000;

const static_path = path.join(__dirname, '../public');
const template_path = path.join(__dirname, '../templates/views');
const partial_path = path.join(__dirname, '../templates/partials');

// console.log(`Static_path : ${static_path}`);

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static(static_path));
app.set('views', template_path);
app.set('view engine', 'hbs');
hbs.registerPartials(partial_path);


const middleware = (req, res, next) => {
    console.log('Hello middleware');
    next()
}

app.get('/', (req, res) => {
    res.render('index');
})
app.get('/about', middleware, (req, res) => {
   res.render('about');
});

app.get('/checkout', (req, res) => {
    res.render('checkout');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/faq', (req, res) => {
    res.render('faq');
});

app.get('/products', (req, res) => {
    res.render('products');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/signin', (req, res) => {
    res.render('signin');
});

app.get('/single', (req, res) => {
    res.render('single');
});

app.post('/register', async (req, res) => {
    try {

       const registerCustomer = new Register(
           {
               firstname : req.body.firstname,
               lastname : req.body.lastname,
               email : req.body.email,
               password : req.body.password,
           }
       );
        
       const register = await registerCustomer.save();
       res.status(201).render('index')
       console.log(`Customer data ==>> ${registerCustomer}`)
        
    } catch (error) {
        res.status(400).send(error.message)
    }
})

app.listen(port, () => {
    console.log(`Server is running on port No.${port}`)
});