import {Model} from "objection"


class Text2Model extends Model{
    static get idColumn(){
        return 'id';
    }
    static get tableName(){
        return "text2";
    }
    static get jsonSchema(){
        return {
            type: 'object',
            required: ['title','text'],
            properties: {
                id: {type: "integer"},
                title: {type: "string",minLength: 1, maxLength: 50},
                text: {type: "string",minLength: 1, maxLength: 196}
            }
        }
         
    }

    static  get(){
        return Text2Model.query().select("*").orderBy("id");
    }
    static  post(data){
        return Text2Model.query().insert(data).returning('*');
    }
    static  put(id, data){
        return Text2Model.query().put(data).where("id", id).returning('*');
    }
    static delete(id){
        return Text2Model.query().del().where("id", id).returning('*');
    }
}

export default Text2Model;