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

    static  findByUsername(user){
        return UsersModel.query().findOne({user});
    }
    static  get(){
        return UsersModel.query().select("*").orderBy("id");
    }
    static  post(data){
        return UsersModel.query().insert(data).returning('*');
    }
    static  put(id, data){
        return UsersModel.query().put(data).where("id", id).returning('*');
    }
    static delete(id){
        return UsersModel.query().del().where("id", id).returning('*');
    }
}

export default UsersModel;