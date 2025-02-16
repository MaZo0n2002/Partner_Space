import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from '../tabs/tabs.component'; // Correct import path
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    TabsComponent,
    RouterModule
  ]
})
export class LayoutComponent {
  title = 'Home';
}