import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private router: Router) {}

  login() {
    // Perform authentication logic here...

    // Redirect to Layout (Authenticated Area)
    this.router.navigate(['/home']); // ✅ Redirect to the LayoutComponent with Tabs
  }
}
