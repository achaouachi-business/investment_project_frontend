import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class RessourcesService {

  public host: string = "http://localhost:8085";
  
  constructor(private http: HttpClient,
    private authenticationService: AuthentificationService) {}

  public getRessource(url:any){
    let token = this.authenticationService.getAuthenticatedUserToken();
     return this.http.get(this.host+url /*,{
      headers: new HttpHeaders(
        {
          'Authorization':token
        }
      )
    }*/
    );
  } 

  public postRessource(url:string, ressources: any){
    let token = this.authenticationService.getAuthenticatedUserToken();
    return this.http.post<any>(this.host+url, ressources /*,{
      headers: new HttpHeaders(
        {
          'Authorization':token
        }
      )
    }*/
    );
 } 
/**
 * get products by user given key word 
 */
 public searchRechercheByKeyWord(keyWord: string, url: string){
  let token = this.authenticationService.getAuthenticatedUserToken();
  return this.http.post<any>(this.host+url, keyWord /*,{
    headers: new HttpHeaders(
      {
        'Authorization':token
      }
    )
  }*/
  );
}

 public deleteRessource(url:any){
  let token = this.authenticationService.getAuthenticatedUserToken();
  return this.http.delete(this.host+url /*,{
    headers: new HttpHeaders(
      {
        'Authorization':token
      }
    )
  }*/
  );
 } 
 
 //saving user in db not need authentification
 public postUser(url:string, ressources: User){
  return this.http.post<User>(this.host+url, ressources);
} 
  
}
