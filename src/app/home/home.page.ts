import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  address: string = '';

  constructor(private router: Router) { }

  goToDetail() {
    this.router.navigate(['/detail']);
  }

  // handleClick() {
  //   alert(this.address);
  // }

}
