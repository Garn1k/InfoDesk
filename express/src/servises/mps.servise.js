import { MpsModel } from '../models/';

class MpsServise{
    static get(){
        return MpsModel.get();
    }
    static post(data){
        return MpsModel.post(data);
    }
    static put(id, data){
        return MpsModel.put(id, data);
    }
    static delete(id){
        return MpsModel.delete(id);
    }
}

export default MpsServise;