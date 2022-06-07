import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TokenStorageService} from "./token-storage.service";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Role} from "../_model/role";

const API_URL=`${environment.apiUrl}/api/v1/roles`
@Injectable({
  providedIn: 'root'
})
export class RoleService {
  httpOptions = {
    headers: new HttpHeaders({ 'Authorization': 'Bearer '+this.token.getToken() })
  };

  constructor(private http: HttpClient,private token:TokenStorageService) {
  }
  findAllRole() :Observable<Role[]> {
    return this.http.get<Role[]>(`${API_URL}`,this.httpOptions);
  }
}
