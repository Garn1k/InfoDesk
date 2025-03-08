import {Model} from "objection"


class SecondAcceptabilityModel extends Model{
    static get idColumn(){
        return 'id';
    }
    static get tableName(){
        return "second-acceptability";
    }
    static get jsonSchema(){
        return {
            type: 'object',
            required: ['name','day'],
            properties: {
                id: {type: "integer"},
                name: {type: "string",minLength: 1, maxLength: 25},
                day: {type: "string",minLength: 1, maxLength: 196},
                time: {type: "string",minLength: 1, maxLength: 196}
            }
        }
         
    }

    static get(){
        return SecondAcceptabilityModel.query().select("*").orderBy("id");
    }
    static post(data){
        return SecondAcceptabilityModel.query().insert(data).returning('*');
    }
    static put(id, data){
        return SecondAcceptabilityModel.query().put(data).where("id", id).returning('*');
    }
    static delete(id){
        return SecondAcceptabilityModel.query().del().where("id", id).returning('*');
    }
}

export default SecondAcceptabilityModel;