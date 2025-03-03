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

    static async get(user){
        const user = await AcceptabilityModel.query().select("*").orderBy("id");
        return user;
    }

    static async post(data){
        await AcceptabilityModel.query().insert(data);
        return;
    }
    static async put(id, data){
        await AcceptabilityModel.query().findById(id).patch(data);
        return;
    }
    static async delete(id){
        await AcceptabilityModel.query().deleteById(id);
        return;
    }
}

export default AcceptabilityModel;