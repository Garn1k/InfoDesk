import { Text1Model } from '../models/';

class Text1Servise{
    static get(){
        return Text1Model.get();
    }
    static post(data){
        return Text1Model.post(data);
    }
    static put(id, data){
        return Text1Model.put(id, data);
    }
    static delete(id){
        return Text1Model.delete(id);
    }
}

export default Text1Servise;