import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public username: string;
  public pass: string;

  // validasi() {
  //   if (this.username == null || this.pass == null) {
  //     alert('Ada inputan yang kosong');
  //     this.username = null;
  //     this.pass = null;
  //   }
  // }

  constructor(private router: Router) {}
  validasi(): void {
    if (this.username == null || this.pass == null) {
      alert('Ada inputan yang kosong');
      this.username = null;
      this.pass = null;
      this.router.navigate(['/login']);
    } else if (this.username == this.username || this.pass == this.pass) {
      this.router.navigate(['/home']);
      this.username = null;
      this.pass = null;
    }
  }

  ngOnInit() {}
}
