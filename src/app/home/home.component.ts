import { Component, OnInit } from '@angular/core';
import { AdComponentService } from './ad-component/ad-component.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  postList;
  imageURLs = [];
  constructor(private adService: AdComponentService) {
    this.imageURLs = [
      'http://13.233.86.111/raptur/uploads/posts/images/IMG_20190913_141841_965.jpg',
      'http://13.233.86.111/raptur/uploads/posts/images/images.jpeg',
      'http://13.233.86.111/raptur/uploads/posts/images/IMG_20190812_141315.jpg'
    ]
   }

  ngOnInit() {
    this.adService.getPosts().subscribe((res) => {
      
      this.postList = res['allPosts'];
      console.log('all response', res['allPosts']);
    });
  }

}
