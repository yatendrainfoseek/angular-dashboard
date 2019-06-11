import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-regis',
  templateUrl: './login-regis.component.html',
  styleUrls: ['./login-regis.component.scss']
})
export class LoginRegisComponent implements OnInit {

  toggleFormClass;

  constructor() { }

  ngOnInit() { }

  showSignUp() {
    this.toggleFormClass = 'bounceLeft';
  }

  showLogin() {
    this.toggleFormClass = 'bounceRight';
  }

}
