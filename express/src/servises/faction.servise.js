import { FactionModel } from '../models/';

class FactionServise{
    static get(){
        return FactionModel.get();
    }
    static post(data){
        return FactionModel.post(data);
    }
    static put(id, data){
        return FactionModel.put(id, data);
    }
    static delete(id){
        return FactionModel.delete(id);
    }
}

export default FactionServise;