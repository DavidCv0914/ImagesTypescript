import express,{Application} from "express";
import imagesRoutes from "./routes/images.routes";
import cors from "cors";

class Server {

    app : Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config():void{
        this.app.set('port',4000);
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes():void{
        this.app.use(imagesRoutes);
    }

    start():void{
        this.app.listen(this.app.get('port'),() => {
            console.log("server runing on port ",this.app.get('port'));
            
        })
    }

}

const runing = new Server();
runing.start();