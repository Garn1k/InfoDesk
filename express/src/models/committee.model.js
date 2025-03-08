import {Model} from "objection"


class CommitteeModel extends Model{
    static get idColumn(){
        return 'id';
    }
    static get tableName(){
        return "committee";
    }
    static get jsonSchema(){
        return {
            type: 'object',
            required: ['name','member1'],
            properties: {
                id: {type: "integer"},
                name: {type: "string",minLength: 1, maxLength: 25},
                member1: {type: "string",minLength: 1, maxLength: 50},
                member2: {type: "string",minLength: 1, maxLength: 50},
                cityphone: {type: "string",minLength: 1, maxLength: 196},
                internalphone: {type: "string",minLength: 1, maxLength: 196},
                internalphone2: {type: "string",minLength: 1, maxLength: 196},
            }
        }
         
    }

    static  get(){
        return CommitteeModel.query().select("*").orderBy("id");
    }
    static  post(data){
        return CommitteeModel.query().insert(data).returning('*');
    }
    static  put(id, data){
        return CommitteeModel.query().put(data).where("id", id).returning('*');
    }
    static delete(id){
        return CommitteeModel.query().del().where("id", id).returning('*');
    }
}

export default CommitteeModel;