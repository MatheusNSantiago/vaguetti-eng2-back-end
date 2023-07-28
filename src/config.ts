import UserDAOMongoose from "./persistence/DAO/user/UserDAOMongoose";
import RegistroDAOMongoose from "./persistence/DAO/registro/RegistroDAOMongoose";

const userDAO = new UserDAOMongoose();

export default {
    UserDAO: UserDAOMongoose,
    RegistroDAO: RegistroDAOMongoose,
}
