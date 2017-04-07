import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './base.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';

/**
 * This is our injectable test service it extends BaseService which means you can use all the metods from BaseService
 * The parameters you need to supply to the base service are baseUrl, itemsName, and itemName
 * You need to call the super constructor since you extend the BaseService
 */
@Injectable() export class TestService extends BaseService {
  private _test: string;
  constructor(public http: Http) {
    super(http/*, http*/);
    this.baseUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json';
    this.itemsName = 'API- TestService';
    this.itemName = 'API- TestService';
  }

}



