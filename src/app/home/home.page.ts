import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { RadditService } from '../raddit.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // address: string = '';
  posts: object[] = [];

  constructor(private router: Router, private radditService: RadditService) { }

  ngOnInit() {
    this.radditService.getPosts()
    .subscribe((response: any) => {
      // console.log(response.data.children);
      this.posts = response.data.children;
    });
  }

  goToDetail(post: any) {
    this.radditService.post = post;
    this.router.navigate(['/detail']);
  }

  // handleClick() {
  //   alert(this.address);
  // }

}
