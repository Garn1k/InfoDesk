import { AcceptabilityModel } from '../models/';

class AcceptabilityServise{
    static async get(){
        return AcceptabilityModel.get();
    }
    static async post(data){
        return AcceptabilityModel.post(data);
    }
    static async put(id, data){
        return AcceptabilityModel.put(id, data);
    }
    static async delete(id){
        return AcceptabilityModel.delete(id);
    }
}

export default AcceptabilityServise;