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
            let users = await Usuario.findAll({
                order: [ 
                    ['ID', 'DESC']
                ],
                limit: 1,
                offset: 1
            });
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
    },
    create: async (req, res) => {
        try{
            Usuario.create({
                nome: 'greg',
                email: 'greg@email.com',
                senha: '1234'
            })

            res.send('Usuario criado com sucesso!')
        } catch(error) {
            res.send(`Error: ${error}`)
        }
    }
}

module.exports = userController;
