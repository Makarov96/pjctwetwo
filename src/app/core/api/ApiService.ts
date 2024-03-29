import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient, private route: ActivatedRoute, public router: Router) {}

  isAuthenticated(): boolean {
    return true;
  }
//fierro :v lo compilamos de nuevo va ? simon l
  getNgrok(): string {
    return environment.serverUrl;
  }

  getFeedUrl(): string {
    return 'http://gungun:gungun@192.168.1.5:5000';
  }

  getMessages(): any {
    let headers = new HttpHeaders();

    headers = headers.append('Authorization', 'Basic Z3VuZ3VuOmd1bmd1bg==');
    return this.http.get(environment.serverUrl + '/api/messages');
  }

  deleteMessage(id: string, createdOn: string) {
    return this.http.delete(environment.serverUrl + '/api/messages/' + id + '/' + createdOn);
  }

  getNotifications(): any {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic Z3VuZ3VuOmd1bmd1bg==');
    return this.http.get(environment.serverUrl + '/api/notification');
  }

  deleteNotification(id: string, createdOn: string) {
    return this.http.delete(environment.serverUrl + '/api/notification/' + id + '/' + createdOn);
  }

  indexFace(postData: any) {
    return this.http.post(environment.serverUrl + '/api/faces/index', postData);
  }

  getFaces(): any {
    return this.http.get(environment.serverUrl + '/api/faces');
  }

  deleteFace(id: string) {
    return this.http.delete(environment.serverUrl + '/api/faces/' + id);
  }

  updateFace(data: any): any {
    return this.http.put(environment.serverUrl + '/api/faces', data);
  }
}
