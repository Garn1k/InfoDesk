import {Model} from "objection"


class UnitsModel extends Model{
    static get idColumn(){
        return 'id';
    }
    static get tableName(){
        return "units";
    }
    static get jsonSchema(){
        return {
            type: 'object',
            required: ['name'],
            properties: {
                id: {type: "integer"},
                name: {type: "string",minLength: 1, maxLength: 50},
                internalphone: {type: "string",minLength: 1, maxLength: 50},
            }
        }
         
    }

    static  get(){
        return UnitsModel.query().select("*").orderBy("id");
    }
    static  post(data){
        return UnitsModel.query().insert(data).returning('*');
    }
    static  put(id, data){
        return UnitsModel.query().put(data).where("id", id).returning('*');
    }
    static delete(id){
        return UnitsModel.query().del().where("id", id).returning('*');
    }
}

export default UnitsModel;