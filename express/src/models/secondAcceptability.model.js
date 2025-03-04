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

    static async post(data){
        await SecondAcceptabilityModel.query().insert(data);
        return;
    }
    static async put(id, data){
        await SecondAcceptabilityModel.query().findById(id).patch(data);
        return;
    }
    static async delete(id){
        await SecondAcceptabilityModel.query().deleteById(id);
        return;
    }
}

export default SecondAcceptabilityModel;