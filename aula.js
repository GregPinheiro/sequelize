const celulares = [
    {
        nome: 'Motorola Moto E6 Plus',
        preco: 14999
    },
    {
        nome: 'Motorola Moto G7',
        preco: 19999
    },
    {
        nome: 'Alcatel 5033A',
        preco: 6999
    },
    {
        nome: 'Samsung Galaxy A50',
        preco: 33499
    }
];

var result = celulares.filter((celular) => celular.preco < 20000)

console.log(result)