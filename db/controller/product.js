const { options } = require("../../options/sqliteDB");
const knex = require("knex")(options);

class Contenedor {
    
    static  createTable() {
        knex.schema
            .createTable("productos", (table) => {
                table.increments("id");
                table.string("title");
                table.integer("price");
                table.integer("thumbnail");
            })
            .then(() => {
                console.log("Table cars created");
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                knex.destroy();
            });                  
        }
    static insert(productos){        
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
    }
    static getAllProducts(){
        knex
            .from("cars")
            .select("*")//trae todos los registros de cars
            .orderBy("price", "desc") //sintaxis sql que permite ordenar en este caso por price y en descendente(desc)
            .then((rows) => {
            res.json(rows);
            })
            .catch((err) => {
            console.log(err);
            res.status(500).end();
            })   
    }
}
module.exports = Contenedor;

