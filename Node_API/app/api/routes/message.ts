import express from 'express';
import { MessageControllers } from '../controllers/message';


export class MessageRoutes {
    public router = express.Router();
    private mesContr = new MessageControllers();

    public getAppRoutes(): express.Router {
        this.router.get('/:id', this.mesContr.message());
        this.router.post('/create', this.mesContr.create());
        return this.router;
    }

}