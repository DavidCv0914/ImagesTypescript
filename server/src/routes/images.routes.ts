import { Router } from "express";
import { images } from "../controllers/imageControllers";

class ImagesRoutes{
    
    router : Router = Router();
    
    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',images.getImages);
        this.router.get('/:id',images.getImage)
        this.router.post('/crearImage',images.createImage);
        this.router.put('/updateImage/:id',images.updateImage);
        this.router.delete('/deleteImage/:id',images.deleteImage);
    }

}

const imageRouter = new ImagesRoutes();
export default imageRouter.router;