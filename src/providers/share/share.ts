import { Injectable } from '@angular/core';

/*
  Generated class for the ShareProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShareProvider {

  //splitpaneviewnav:any = {}
  //connection:any = {};
  //session:any = {};
  //user:any = {};

  curentpage:string = '';

  server: string = '';

  sessionid: string = '';
  role: string = '';

  username: string = '';
  firstname: string = '';
  lastname: string = '';

  constructor() {
  	this.curentpage = 'StarterPage';

    this.server = "https://192.168.1.189/";
    //this.connection.headers = new Headers({ 'Content-Type': 'application/json' });

    this.sessionid = "";
    this.role = "member";

    this.username = "";
    this.firstname = "";
    this.lastname = "";
  }

}
