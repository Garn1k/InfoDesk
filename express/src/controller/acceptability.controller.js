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
}


export default AcceptabilityController;