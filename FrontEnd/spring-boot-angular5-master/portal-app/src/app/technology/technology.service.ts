import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Technology } from '../models/technology.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TechnologyService {

  constructor(private http:HttpClient) {}

  private technologyUrl = 'http://localhost:8071/technology';
  //private userUrl = '/api';

  public getTechnology() {
    return this.http.get<Technology[]>(this.technologyUrl);
  }

  public deleteTechnology(technology) {
    return this.http.delete(this.technologyUrl + "/"+ technology.id);
  }

  public createTechnology(technology) {
    return this.http.post<Technology>(this.technologyUrl, technology);
  }

}
