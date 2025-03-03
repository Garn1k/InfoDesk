import { AcceptabilityServise } from '../servises';

class AcceptabilityController{
    static async get(req, res, next){
        try {
            const payloads = await AcceptabilityServise.get();
            res.status(200).json({payloads});
        } catch (error) {
            console.error(error);
        }
    }
    static async post(req, res, next){
        try {
            const data = req.body;
            await AcceptabilityServise.post(data);
            res.status(200).json({message: "Data created"});
        } catch (error) {
            console.error(error);
        }
    }
    static async put(req, res, next){
        try {
            const {id} = req.params;
            const data = req.body;
            await AcceptabilityServise.put(id, data);
            res.status(200).json({message: "Data updated"});
        } catch (error) {
            console.error(error);
        }
    }
    static async delete(req, res, next){
        try {
            const {id} = req.params;
            await AcceptabilityServise.delete(id);
            res.status(200).json({message: "Data deleted"});
        } catch (error) {
            console.error(error);
        }
    }
}


export default AcceptabilityController;