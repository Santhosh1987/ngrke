import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { UserEntity } from '../entity/user.entity';
import { BaseService } from './base.service';

@Injectable()
export class UserService extends BaseService<UserEntity> {

  constructor(
    private httpClient: HttpClient) {
      super(httpClient, 'users');
     }

  public cachedUser: UserEntity;

}
