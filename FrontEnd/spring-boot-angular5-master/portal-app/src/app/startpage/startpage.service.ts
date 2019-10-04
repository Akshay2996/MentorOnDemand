import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user.model';
import { Technology } from '../models/technology.model';
import { Training } from '../models/training.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StartpageService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8071/user';
  private techUrl = 'http://localhost:8071/technology';
  private trainingUrl = 'http://localhost:8071/training';
  //private userUrl = '/api';

  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    return this.http.post<User>(this.userUrl, user);
  }

  public getTechnology() {
    return this.http.get<Technology[]>(this.techUrl);
  }

  public getTraining() {
    return this.http.get<Training[]>(this.trainingUrl);
  }

}
