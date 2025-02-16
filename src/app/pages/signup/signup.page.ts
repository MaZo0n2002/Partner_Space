import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  constructor(private router: Router) {}

  signup() {
    // Perform signup logic here...

    // Redirect to Layout (Authenticated Area)
    this.router.navigate(['/home']); // ✅ Redirect to LayoutComponent with Tabs
  }
}
