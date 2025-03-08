import {Model} from "objection"


class Text1Model extends Model{
    static get idColumn(){
        return 'id';
    }
    static get tableName(){
        return "text1";
    }
    static get jsonSchema(){
        return {
            type: 'object',
            required: ['title','text'],
            properties: {
                id: {type: "integer"},
                title: {type: "string",minLength: 1, maxLength: 50},
                text: {type: "string",minLength: 1, maxLength: 196},
                subtitle1: {type: "string",minLength: 1, maxLength: 50},
                subtitle2: {type: "string",minLength: 1, maxLength: 50}
            }
        }
         
    }

    static  get(){
        return Text1Model.query().select("*").orderBy("id");
    }
    static  post(data){
        return Text1Model.query().insert(data).returning('*');
    }
    static  put(id, data){
        return Text1Model.query().put(data).where("id", id).returning('*');
    }
    static delete(id){
        return Text1Model.query().del().where("id", id).returning('*');
    }
}

export default Text1Model;