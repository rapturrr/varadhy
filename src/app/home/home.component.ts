import { Component, OnInit } from '@angular/core';
import { AdComponentService } from './ad-component/ad-component.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  postList;
  constructor(private adService: AdComponentService) { }

  ngOnInit() {
    this.adService.getPosts().subscribe((res) => {
      
      this.postList = res['allPosts'];
      console.log('all response', res['allPosts']);
    });
  }

}
