import { AcceptabilityModel } from '../models/';

class AcceptabilityServise{
    static async get(){
        return AcceptabilityModel.get();
    }
}

export default AcceptabilityServise;