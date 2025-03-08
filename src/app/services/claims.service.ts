import { Injectable } from '@angular/core';
import { Claims } from '../pages/claims/claims';// Adjust the import path as needed

@Injectable({
  providedIn: 'root',
})
export class ClaimsService {
  private claimsList: Claims[] = [
    {
      id: 1,
      type: 'Car Accident',
      policyNumber: 123456789,
      date: new Date('2024-03-15'),
      product: 'Car Insurance',
    },
    {
      id: 2,
      type: 'Health Claim',
      policyNumber: 987654321,
      date: new Date('2024-02-20'),
      product: 'Health Insurance',
    },
    {
      id: 3,
      type: 'Home Damage',
      policyNumber: 555888333,
      date: new Date('2024-01-05'),
      product: 'Home Insurance',
    },
    {
      id: 4,
      type: 'Travel Cancellation',
      policyNumber: 111222333,
      date: new Date('2023-12-10'),
      product: 'Travel Insurance',
    },
    {
      id: 5,
      type: 'Theft Claim',
      policyNumber: 777999111,
      date: new Date('2023-11-25'),
      product: 'Personal Property Insurance',
    },
  ];

  constructor() {}

  // Get all claims
  getClaims(): Claims[] {
    return this.claimsList;
  }

  // Get total number of claims
  getTotalClaims(): number {
    return this.claimsList.length;
  }

  // Get open claims (example logic)
  getOpenClaims(): number {
    return this.claimsList.filter((claim) => claim.type === 'Open').length;
  }

  // Get closed claims (example logic)
  getClosedClaims(): number {
    return this.claimsList.filter((claim) => claim.type === 'Closed').length;
  }
}