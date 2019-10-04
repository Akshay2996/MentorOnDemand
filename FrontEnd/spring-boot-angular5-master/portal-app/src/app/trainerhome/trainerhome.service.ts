import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Mentor } from '../models/mentor.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TrainerhomeService {

  constructor(private http:HttpClient) {}

  private mentorUrl = 'http://localhost:8071/mentor';
  //private userUrl = '/api';

  public getMentor() {
    return this.http.get<Mentor[]>(this.mentorUrl);
  }

  public deleteMentor(mentor) {
    return this.http.delete(this.mentorUrl + "/"+ mentor.id);
  }

  public createMentor(mentor) {
    return this.http.post<Mentor>(this.mentorUrl, mentor);
  }

}
