const { Usuario } = require('../models')

const userController = {
    loginPage: (req, res) => {
        res.render('login')
    },
    senha: (req, res) => {
        let { password } = req.params
        res.render('senha', {password: password} )
    },
    index: async (req, res) => {
        try{
            let users = await Usuario.findAll();
            res.render('usuarios', {users});
        } catch(error) {
            console.log(`Error: ${error}`);
        }
    },
    oneUser: async (req, res) => {
        try{
            let { nome } = req.body;
            let user = await Usuario.findOne({
                where: { nome }
            })
            res.render('usuario', { user });
        } catch(error) {
            console.log(`Error: ${error}`);
        }
    }
}

module.exports = userController;
