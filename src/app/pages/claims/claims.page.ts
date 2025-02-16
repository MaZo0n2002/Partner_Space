import { Component, OnInit, ViewChild } from '@angular/core';
import { Claims } from './claims';
import { PopoverController } from '@ionic/angular';
@Component({
  standalone: false,
  selector: 'app-claims',
  templateUrl: './claims.page.html',
  styleUrls: ['./claims.page.scss'],
})
export class ClaimsPage implements OnInit {
  claimsList: Claims[] = [];
  onClick(){
    console.log('clickable');
  }
  constructor() { 
    this.claimsList = [
      {
        id: 1,
        type: 'Car Accident',
        policyNumber: 123456789,
        date: new Date('2024-03-15'),
        product: 'Car Insurance'
      },
      {
        id: 2,
        type: 'Health Claim',
        policyNumber: 987654321,
        date: new Date('2024-02-20'),
        product: 'Health Insurance'
      },
      {
        id: 3,
        type: 'Home Damage',
        policyNumber: 555888333,
        date: new Date('2024-01-05'),
        product: 'Home Insurance'
      },
      {
        id: 4,
        type: 'Travel Cancellation',
        policyNumber: 111222333,
        date: new Date('2023-12-10'),
        product: 'Travel Insurance'
      },
      {
        id: 5,
        type: 'Theft Claim',
        policyNumber: 777999111,
        date: new Date('2023-11-25'),
        product: 'Personal Property Insurance'
      }
    ];
}

  ngOnInit() {
  }

}
