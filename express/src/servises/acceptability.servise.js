import { AcceptabilityModel } from '../models/';

class AcceptabilityServise{
    static get(){
        return AcceptabilityModel.get();
    }
    static post(data){
        return AcceptabilityModel.post(data);
    }
    static put(id, data){
        return AcceptabilityModel.put(id, data);
    }
    static delete(id){
        return AcceptabilityModel.delete(id);
    }
}

export default AcceptabilityServise;