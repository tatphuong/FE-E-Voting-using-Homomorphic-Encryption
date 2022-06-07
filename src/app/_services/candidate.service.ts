import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TokenStorageService} from "./token-storage.service";
import {Observable} from "rxjs";
import {Candidate} from "../_model/candidate";
import {environment} from "../../environments/environment";

const API_URL=`${environment.apiUrl}/api/v1/candidates`
@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  candidates:Candidate[]=[];

  constructor(private http: HttpClient,private token:TokenStorageService) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Authorization': 'Bearer '+this.token.getToken() })
  };
  //findAll group
  findAllCandidate() :Observable<Candidate[]> {
    return this.http.get<Candidate[]>(`${API_URL}`,this.httpOptions);
  }
  findCandidateById(id:number) :Observable<Candidate> {
    return this.http.get<Candidate>(`${API_URL}/${id}`,this.httpOptions);
  }
  createCandidate(candidate:Candidate) :Observable<Candidate> {
    return this.http.post<Candidate>(`${API_URL}`,candidate,this.httpOptions);
  }
  updateCandidate(id:number,candidate:Candidate) :Observable<Candidate> {
    return this.http.patch<Candidate>(`${API_URL}/${id}`,candidate,this.httpOptions);
  }
  deleteCandidate(id:number) :Observable<Candidate> {
    return this.http.delete<Candidate>(`${API_URL}/${id}`,this.httpOptions);
  }
}
