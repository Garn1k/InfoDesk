import { CommitteeModel } from '../models/';

class CommitteeServise{
    static get(){
        return CommitteeModel.get();
    }
    static post(data){
        return CommitteeModel.post(data);
    }
    static put(id, data){
        return CommitteeModel.put(id, data);
    }
    static delete(id){
        return CommitteeModel.delete(id);
    }
}

export default CommitteeServise;