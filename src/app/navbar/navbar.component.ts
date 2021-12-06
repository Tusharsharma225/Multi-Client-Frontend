import { SignupService } from './../services/signupservice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private signupService : SignupService) { }

  ngOnInit(): void {
  }

  logout()
  {
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('type');
    this.signupService.updatelogout();

  }

}
