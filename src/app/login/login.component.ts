import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
//   styleUrls: ['./app.component.scss']
})
export class LoginComponent {
  constructor(private router: Router){}
  type = ['HR@ggktech.com', 'emp@ggktech.com'];
  mainPage(type: string) {
    localStorage.setItem('role', type);
    if (type == 'HR@ggktech.com') {
      this.router.navigate(['/HRdashboard']);
    }   
    else {
      this.router.navigate(['/grid']);
      
    }
  }
}
