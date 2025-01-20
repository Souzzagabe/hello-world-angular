import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl: string = environment.apiUrl;

  http = inject(HttpClient);

  async getGitUser(username: string) {
    return await firstValueFrom(
      this.http.get<any>(`${this.baseUrl}users/${username}/repos`)
    );
  }
}
