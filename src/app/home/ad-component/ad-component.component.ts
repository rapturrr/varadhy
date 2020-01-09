import { Component, OnInit, Input } from '@angular/core';
import{ AppConstants } from '../../utils/constants';


@Component({
  selector: 'ad-component',
  templateUrl: './ad-component.component.html',
  styleUrls: ['./ad-component.component.css']
})
export class AdComponentComponent implements OnInit {
  
  public postList:{post_id:number,posted_user_id:number,category:string,city:string,user_name:string,user_image:string,mobile_number:number,post_image:string,
  post_image1: string,post_image2: string,post_time:number,post_state:string,post_status:string,city_id:number,category_id:number,is_follow: string}[] ;
  imageDomain: string;
  profileImgUrl;
  adImgUrl;

  @Input('postObj') postObj;
  

  constructor() { }

  ngOnInit() {
    this.prepareProfileImgUrl();
    this.prepareAdImgUrl();
  }

  prepareProfileImgUrl() {
    if (this.postObj.user_image !== '') {
      this.profileImgUrl = AppConstants.imagesDomain + this.postObj.user_image;
    } else {
      this.profileImgUrl = './assets/images/logo.jpg';
    }
  }

  prepareAdImgUrl() {
    if (this.postObj.post_image !== '') {
      this.adImgUrl = AppConstants.imagesDomain + this.postObj.post_image;
    } else {
      this.adImgUrl = './assets/images/logo.jpg';
    }
  }

}
