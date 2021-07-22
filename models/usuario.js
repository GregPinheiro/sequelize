module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define('Usuario', {
        nome: {
            type: DataType.STRING,
            allowNull: true
        },
        senha: {
            type: DataType.STRING,
            allowNull: true
        },
        email: {
            type: DataType.STRING,
            allowNull: true
        }
    }, {
        tableName: 'usuarios',
        timestamps: false
    })

    return Usuario
}