import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TokenStorageService} from "./token-storage.service";
import {Observable} from "rxjs";
import {Election} from "../_model/election";
import {VotingRequest} from "../_model/voting-request";

const API_URL=`${environment.apiUrl}/api/v1/elections`
@Injectable({
  providedIn: 'root'
})
export class ElectionService {
  elections:Election[]=[];

  constructor(private http: HttpClient,private token:TokenStorageService) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Authorization': 'Bearer '+this.token.getToken() })
  };
  //findAll group
  findAllElection() :Observable<Election[]> {
    return this.http.get<Election[]>(`${API_URL}`,this.httpOptions);
  }
  findElectionById(id:number) :Observable<Election> {
    return this.http.get<Election>(`${API_URL}/${id}`,this.httpOptions);
  }
  createElection(election:Election) :Observable<Election> {
    return this.http.post<Election>(`${API_URL}`,election,this.httpOptions);
  }
  updateElection(id:number,election:Election) :Observable<Election> {
    return this.http.patch<Election>(`${API_URL}/${id}`,election,this.httpOptions);
  }
  deleteElection(id:number) :Observable<Election> {
    return this.http.delete<Election>(`${API_URL}/${id}`,this.httpOptions);
  }
  addCandidate(id:number,idCandidate:number) :Observable<string> {
    return this.http.get<string>(`${API_URL}/${id}/${idCandidate}`,this.httpOptions);
  }
  getTotalVotes(id:number) :Observable<any> {
    return this.http.get<any>(`${API_URL}/${id}/totalVotes`,this.httpOptions);
  }
  getTotalVoteForAD(id:number) :Observable<any> {
    return this.http.get<any>(`${API_URL}/${id}/totalVotesAD`,this.httpOptions);
  }
  voting(id:number,votingReq:VotingRequest) :Observable<bigint> {
    return this.http.post<bigint>(`${API_URL}/${id}/voting`,votingReq,this.httpOptions);
  }
  checkVoted(electionId:number,userId:number) :Observable<boolean> {
    return this.http.get<boolean>(`${API_URL}/${electionId}/checkVoted/${userId}`,this.httpOptions);
  }
  getBallot(electionId:number,userId:number) :Observable<bigint> {
    return this.http.get<bigint>(`${API_URL}/${electionId}/getBallot/${userId}`,this.httpOptions);
  }
}
