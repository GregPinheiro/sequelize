const express = require('express')
const app = express()
const port = 8080

const userRoutes = require('./routes/users.routers')

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('home')
})

app.use(userRoutes);

app.listen(port, () => console.log(`Server listen on port ${port}`))
