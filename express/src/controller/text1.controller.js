import { Text1Servise } from '../servises';

class Text1Controller{
    static async get(req, res, next){
        try {
            const payloads = await Text1Servise.get();
            res.status(200).json({payloads});
        } catch (error) {
            console.error(error);
        }
    }
    static async post(req, res, next){
        try {
            const data = req.body;
            const result = await Text1Servise.post(data);
            res.status(200).json({...result});
        } catch (error) {
            console.error(error);
        }
    }
    static async put(req, res, next){
        try {
            const {id} = req.params;
            const data = req.body;
            const result = await Text1Servise.put(id, data);
            res.status(200).json({...result});
        } catch (error) {
            console.error(error);
        }
    }
    static async delete(req, res, next){
        try {
            const {id} = req.params;
            const result = await Text1Servise.delete(id);
            res.status(200).json({...result});
        } catch (error) {
            console.error(error);
        }
    }
}


export default Text1Controller;