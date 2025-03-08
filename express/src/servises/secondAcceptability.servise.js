import { SecondAcceptabilityModel } from '../models/';

class SecondAcceptabilityServise{
    static get(){
        return SecondAcceptabilityModel.get();
    }
    static post(data){
        return SecondAcceptabilityModel.post(data);
    }
    static put(id, data){
        return SecondAcceptabilityModel.put(id, data);
    }
    static delete(id){
        return SecondAcceptabilityModel.delete(id);
    }
}

export default SecondAcceptabilityServise;