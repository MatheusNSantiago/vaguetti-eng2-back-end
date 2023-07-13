import mongoose, { Schema, Document } from "mongoose";
import Registro from "../Registro";

interface IUser extends Document {
    nome: string;
    idade: number;
    cpf: string;
    peso: number;
    altura: number;
    registros: Registro[];
}

const userSchema = new Schema<IUser>({
    nome: { type: String, required: true },
    idade: { type: Number, required: true },
    cpf: { type: String, required: true, unique: true },
    peso: { type: Number, required: true },
    altura: { type: Number, required: true },
    registros: { type: Array<Registro>(), required: false },
});

const UserMongoose = mongoose.model<IUser>("User", userSchema);

export default UserMongoose;
