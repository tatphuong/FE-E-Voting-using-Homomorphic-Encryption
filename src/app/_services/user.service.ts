import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";
import {User} from "../_model/User";
import {TokenStorageService} from "./token-storage.service";


const API_URL=`${environment.apiUrl}/api/v1/users`

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,private token:TokenStorageService) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Authorization': 'Bearer '+this.token.getToken() })
  };

  // get public content "/all"
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  // get public content "/user"
  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

   // get public content "/mod"
  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }
  //find User full profile
  findUserById(id: number) :Observable<User> {
    return this.http.get<User>(`${API_URL}/${id}`,this.httpOptions);
  }
  //find User full profile
  findAllUser() :Observable<User[]> {
    return this.http.get<User[]>(`${API_URL}`,this.httpOptions);
  }
  createUser(user:User) :Observable<User> {
    return this.http.post<User>(`${API_URL}`,user,this.httpOptions);
  }
  //find User full profile
  updateUser(id: number, user: User) :Observable<User>{
    return this.http.patch<User>(`${API_URL}/${id}`,user,this.httpOptions);
  }

   // get public content "/admin"
  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }


}
