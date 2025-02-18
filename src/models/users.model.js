import {Model} from "objection"


class UsersModel extends Model{
    static get idColumn(){
        return 'id';
    }
    static get tableName(){
        return "users";
    }
    static get jsonSchema(){
        return {
            type: 'object',
            required: ['user', 'pwd', 'role'],
            properties: {
                id: {type: "integer"},
                user: {type: "string",minLength: 1, maxLength: 16},
                pwd: {type: "string",minLength: 1, maxLength: 16},
                role: {type: "string",minLength: 1, maxLength: 11}
            }
        }
         
    }

    static async findByUsername(user){
        const user = await UsersModel.query().findOne({user});
        return user;
    }
}

export default UsersModel;