import { CommitteeServise } from '../servises';

class CommitteeController{
    static async get(req, res, next){
        try {
            const payloads = await CommitteeServise.get();
            res.status(200).json({payloads});
        } catch (error) {
            console.error(error);
        }
    }
    static async post(req, res, next){
        try {
            const data = req.body;
            const result = await CommitteeServise.post(data);
            res.status(200).json({...result});
        } catch (error) {
            console.error(error);
        }
    }
    static async put(req, res, next){
        try {
            const {id} = req.params;
            const data = req.body;
            const result = await CommitteeServise.put(id, data);
            res.status(200).json({...result});
        } catch (error) {
            console.error(error);
        }
    }
    static async delete(req, res, next){
        try {
            const {id} = req.params;
            const result = await CommitteeServise.delete(id);
            res.status(200).json({...result});
        } catch (error) {
            console.error(error);
        }
    }
}


export default CommitteeController;