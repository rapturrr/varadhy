import { Component, OnInit } from '@angular/core';
import { AdComponentService } from './ad-component.service';

@Component({
  selector: 'ad-component',
  templateUrl: './ad-component.component.html',
  styleUrls: ['./ad-component.component.css']
})
export class AdComponentComponent implements OnInit {

  constructor(private adService: AdComponentService) { }

  ngOnInit() {
    this.adService.getPosts().subscribe((res) => {
      console.log(res);
    });
  }

}
