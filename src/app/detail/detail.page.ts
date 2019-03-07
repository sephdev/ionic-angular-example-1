import { Component, OnInit } from '@angular/core';
import { RadditService } from '../raddit.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  post: any;

  constructor(private radditService: RadditService) { }

  ngOnInit() {
    this.post = this.radditService.post;
  }

}
