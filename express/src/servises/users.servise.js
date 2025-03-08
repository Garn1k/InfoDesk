import { UsersModel } from '../models/';

class UsersServise{
    static get(){
        return UsersModel.get();
    }
    static post(data){
        return UsersModel.post(data);
    }
    static put(id, data){
        return UsersModel.put(id, data);
    }
    static delete(id){
        return UsersModel.delete(id);
    }
}

export default UsersServise;