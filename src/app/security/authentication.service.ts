import {Injectable} from '@angular//core';
import {Router} from '@angular/router';
import { Headers, Http, Response ,URLSearchParams,Request} from "@angular/http";
import { Observable,AjaxResponse} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class AuthenticationService {
public data :any;
public error:any;
private headers: Headers;
  constructor( private _router: Router,private http:Http)
  {
    this.headers = new Headers();
  }


  login(username:string,password:string)
  {
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('email', username);
    urlSearchParams.append('password', password);
    let body = urlSearchParams.toString();

    return this.http.post("https://andresmfranco.info:81/security/validate_password",body,{headers:this.headers})
      .map((response: Response) => <any>response.json())
      .catch(this.error);
  }
  logout(): void {
        // clear token remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this._router.navigate(['login']);
    }
   checkCredentials( ){
    if (localStorage.getItem('currentUser') === null){
        this._router.navigate(['login']);
        return false;
    }
    return true;
  } 
}