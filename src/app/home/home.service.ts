import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ AppConstants } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  _baseURL : string;

  constructor(private httpClient: HttpClient) { 
    this._baseURL = AppConstants.baseURL;
  }

  getPosts() {
    // return this.httpClient.get(this._baseURL + 'posts/allPosts?user_id=9533394727');
    return this.httpClient.get('assets/allposts.json');
  }

}