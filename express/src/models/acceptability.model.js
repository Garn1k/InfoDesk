import {Model} from "objection"


class AcceptabilityModel extends Model{
    static get idColumn(){
        return 'id';
    }
    static get tableName(){
        return "acceptability";
    }
    static get jsonSchema(){
        return {
            type: 'object',
            required: ['name','day'],
            properties: {
                id: {type: "integer"},
                title: {type: "string",minLength: 1, maxLength: 196},
                name: {type: "string",minLength: 1, maxLength: 25},
                day: {type: "string",minLength: 1, maxLength: 196},
                time: {type: "string",minLength: 1, maxLength: 196}
            }
        }
         
    }

    static  get(){
        return AcceptabilityModel.query().select("*").orderBy("id");
    }
    static  post(data){
        return AcceptabilityModel.query().insert(data).returning('*');
    }
    static  put(id, data){
        return AcceptabilityModel.query().put(data).where("id", id).returning('*');
    }
    static delete(id){
        return AcceptabilityModel.query().del().where("id", id).returning('*');
    }
}

export default AcceptabilityModel;