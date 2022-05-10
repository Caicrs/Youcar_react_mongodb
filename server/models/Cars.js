const mongooose = require('mongoose');

const CarSchema = new mongooose.Schema({

    modelo: { type: String, required: true },
    ano: { type: String, required: true },
    km: { type: String, required: true },
    descricao: { type: String, required: true },
    foto: { type: String, required: true },
    preco: { type: String, required: true },
});

const Car = mongooose.model("cardatas", CarSchema);

module.exports = Car;