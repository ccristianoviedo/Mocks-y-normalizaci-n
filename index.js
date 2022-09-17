const express = require("express");
const Contenedor = require("./db/controller/product")
const app = express();
const { options } = require("./options/sqliteDB");
const knex = require("knex")(options);
const fs =require("fs")
const {faker}=require("@faker-js/faker")
//import { faker } from "@faker-js/faker";

const PORT = 8080;



app.get("/productos",(req, res) => { 
   
   res.send(Contenedor.createTable())
    
 });
app.get("/productosInsert",(req, res) => {
    const productos = [];
    for (let i=0; i < 10; i++){
        const producto=
        {
            title: faker.commerce.productName(),
            price: faker.commerce.price(),
            thumbnail: faker.image.image()
        }
        productos.push(producto)
    }
    knex("productos")
    .insert(productos)
    .then(() => {
        console.log("productos insertados");
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        knex.destroy();
    });
    res.status(200).json(productos)   
        
});   
 
const server = app.listen(PORT, () => {console.log(`Servidor http escuchando en el puerto ${PORT}`);});
 
 server.on("error", (error) => console.log(`Error en servidor ${error}`));

