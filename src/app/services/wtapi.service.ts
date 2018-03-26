import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class WtapiService {

  constructor(private http: HttpClient) { }

  getTeamMembers() {
      return this.http.get('https://willowtreeapps.com/api/v1.0/profiles/')
    }

}
