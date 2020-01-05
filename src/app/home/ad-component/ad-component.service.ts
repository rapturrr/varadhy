import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ AppConstants } from '../../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class AdComponentService {

  _baseURL : string;

  constructor(private httpClient: HttpClient) { 
    this._baseURL = AppConstants.baseURL;
  }

  getPosts() {
    // return this.httpClient.get(this._baseURL + 'posts/allPosts?user_id=9533394727');
    return this.httpClient.get('assets/allposts.json');
  }

  followUser(userId, followerId) {
    let user_id = 'UD27384561'; //userId
    let follower_id = 'UD81960724'; //followerId
    return this.httpClient.get(this._baseURL + `users/follow?user_id=${9704348659}&follower_id=${9533394727}`)
  }
  reportPostComment() {
    
  }


}