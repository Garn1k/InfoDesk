import { UnitsModel } from '../models/';

class UnitsServise{
    static get(){
        return UnitsModel.get();
    }
    static post(data){
        return UnitsModel.post(data);
    }
    static put(id, data){
        return UnitsModel.put(id, data);
    }
    static delete(id){
        return UnitsModel.delete(id);
    }
}

export default UnitsServise;