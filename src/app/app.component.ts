import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myexample';
  public postList:{post_id:number,posted_user_id:number,category:string,city:string,user_name:string,user_image:string,mobile_number:number,post_image:string,
    post_image1: string,post_image2: string,post_time:number,post_state:string,post_status:string,city_id:number,category_id:number,is_follow: string}[] ;
    
}
