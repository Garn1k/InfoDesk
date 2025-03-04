import { SecondAcceptabilityModel } from '../models/';

class SecondAcceptabilityServise{
    static get(){
        return SecondAcceptabilityModel.get();
    }
    static async post(data){
        return SecondAcceptabilityModel.post(data);
    }
    static async put(id, data){
        return SecondAcceptabilityModel.put(id, data);
    }
    static async delete(id){
        return SecondAcceptabilityModel.delete(id);
    }
}

export default SecondAcceptabilityServise;