const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId; 
const carModels = require('./models/Cars');
require("dotenv").config();

app.use(express.json());
app.use(cors())

mongoose.connect(process.env.DATABASE_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.post("/insert" , async (req,res) => {

const carModelo = req.body.modelo ;
const carAno = req.body.ano ;
const carKm = req.body.km ;
const carDescricao = req.body.descricao ;
const carFoto = req.body.foto ;
const carPreco = req.body.preco ;

const car = new carModels({
        modelo: carModelo,
        ano: carAno,
        km: carKm,
        descricao: carDescricao,
        foto: carFoto,
        preco: carPreco

});

try{
await car.save();
res.status(200).send("Criação confirmada");

}
catch(err){
console.log(err)
}

})

app.get("/",async(req,res) => {
   carModels.find({},(err,result) => {
      if(err){
          res.send(err)
      }
      res.send(result)
   })
})

app.get("/details/:id",async(req,res) => {
var id = req.params.id;   

var good_id = new ObjectId(id);


  carModels.find({_id: good_id},(err,result) => {
      if(err){
          res.send(err)
      }
      res.send(result)
     
   })


})

app.put("/update", async(req,res) => {

  const carModelo = req.body.modelo 
  const carAno = req.body.ano 
  const carKm = req.body.km 
  const  carDescricao = req.body.descricao 
  const carFoto = req.body.foto 
  const carPreco = req.body.preco 
  const id = req.body.id;
  
console.log(id)
  try{
    await carModels.findById(id,(error,updatedCar) => {
      updatedCar.modelo = carModelo
      updatedCar.ano = carAno
      updatedCar.km = carKm
      updatedCar.descricao = carDescricao
      updatedCar.foto = carFoto
      updatedCar.preco = carPreco
      updatedCar.save()
      res.send("atualizado !")
    }) ;

  }

  catch(error){
  console.log(error)
  }
    

});

app.delete("/delete/:id", async(req,res) =>{
const id = req.params.id;
await carModels.findByIdAndDelete(id).exec();
res.send("Carro deletado !!")
})
//connectToDatabase();

//app.use('/cars', routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});