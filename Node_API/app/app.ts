import express from 'express';
import { Database } from './api/configuration/db';
import { Routes } from './api/configuration/routes';
import { Web } from './api/configuration/web';

export class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.configure();
  }

  private configure() {
    const db: Database = new Database();
    db.connect();
    const web: Web = new Web(this.app);
    web.activateCors();
    web.bodyParser();
    const route: Routes = new Routes(this.app);
  }
}
