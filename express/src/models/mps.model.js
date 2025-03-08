import {Model} from "objection"


class MpsModel extends Model{
    static get idColumn(){
        return 'id';
    }
    static get tableName(){
        return "mps";
    }
    static get jsonSchema(){
        return {
            type: 'object',
            properties: {
                id: {type: "integer"},
                firstname: {type: "string",minLength: 1, maxLength: 50},
                lastname: {type: "string",minLength: 1, maxLength: 50},
                surname: {type: "string",minLength: 1, maxLength: 50},
                phonenumber : {type : "string", minLength : 1, maxLength : 50},
                key : {type : "boolean"}
            }
        }
         
    }

    static  get(){
        return MpsModel.query().select("*").orderBy("id");
    }
    static  post(data){
        return MpsModel.query().insert(data).returning('*');
    }
    static  put(id, data){
        return MpsModel.query().put(data).where("id", id).returning('*');
    }
    static delete(id){
        return MpsModel.query().del().where("id", id).returning('*');
    }
}

export default MpsModel;