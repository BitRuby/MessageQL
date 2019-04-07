import express from 'express';
import { UserControllers } from '../controllers/user';


export class UserRoutes {
    public router = express.Router();
    private usrContr = new UserControllers();

    public getAppRoutes(): express.Router {
        this.router.get('/:id', this.usrContr.getById());
        this.router.post('/add', this.usrContr.add());
        this.router.delete('/drop', this.usrContr.drop());
        return this.router;
    }

}