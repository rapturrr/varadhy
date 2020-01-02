import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'ad-component',
  templateUrl: './ad-component.component.html',
  styleUrls: ['./ad-component.component.css']
})
export class AdComponentComponent implements OnInit {
  public postList:{post_id:number,posted_user_id:number,category:string,city:string,user_name:string,user_image:string,mobile_number:number,post_image:string,
    post_image1: string,post_image2: string,post_time:number,post_state:string,post_status:string,city_id:number,category_id:number,is_follow: string}[] ;
  @Input('postObj') postObj;
  
  constructor() { }

  ngOnInit() {
    console.log('hello...', this.postObj);
  }

}
