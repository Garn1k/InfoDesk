import {Model} from "objection"


class FactionModel extends Model{
    static get idColumn(){
        return 'id';
    }
    static get tableName(){
        return "faction";
    }
    static get jsonSchema(){
        return {
            type: 'object',
            required: ['name'],
            properties: {
                id: {type: "integer"},
                name: {type: "string",minLength: 1, maxLength: 25},
                member1: {type: "string",minLength: 1, maxLength: 50},
                member2: {type: "string",minLength: 1, maxLength: 50},
                cityphone: {type: "string",minLength: 1, maxLength: 196},
                internalphone: {type: "string",minLength: 1, maxLength: 196},
            }
        }
         
    }

    static  get(){
        return FactionModel.query().select("*").orderBy("id");
    }
    static  post(data){
        return FactionModel.query().insert(data).returning('*');
    }
    static  put(id, data){
        return FactionModel.query().put(data).where("id", id).returning('*');
    }
    static delete(id){
        return FactionModel.query().del().where("id", id).returning('*');
    }
}

export default FactionModel;