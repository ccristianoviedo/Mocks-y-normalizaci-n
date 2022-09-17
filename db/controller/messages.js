const { optionsa } = require("../../options/sqliteMessages");
const knex = require("knex")(optionsa);

class Messages {    
    static  createTable() {
        knex.schema
            .createTable("messages", (table) => {
                table.increments("id");
                table.string("author");
                table.integer("text");
            })
            .then(() => {
                console.log("Table messages created!!");
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                knex.destroy();
            });                  
        }
    static insert(messages){        
        knex("messages")
            .insert(messages)
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
module.exports = Messages;

