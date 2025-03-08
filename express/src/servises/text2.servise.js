import { Text2Model } from '../models/';

class Text2Servise{
    static get(){
        return Text2Model.get();
    }
    static post(data){
        return Text2Model.post(data);
    }
    static put(id, data){
        return Text2Model.put(id, data);
    }
    static delete(id){
        return Text2Model.delete(id);
    }
}

export default Text2Servise;