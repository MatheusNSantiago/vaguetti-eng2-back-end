import { connect } from "mongoose";
require("dotenv/config");

export default class Database {
    public static init() {
        const dsn = `mongodb+srv://matheus-santiago:${process.env["PASSWORD"]}@cluster0.ooxkaen.mongodb.net/?retryWrites=true&w=majority`;

        connect(dsn, {
            connectTimeoutMS: 3000,
            serverSelectionTimeoutMS: 3000,
        })
            .then(() => console.log("Conectou ao servidor do Mongo: " + dsn))
            .catch((error) => {
                console.log("Erro ao conectar ao servidor do Mongo: " + error);
            });
    }
}
