import { Injectable } from '@angular/core';
import { Policies } from '../pages/policies/policies'; // Adjust the import path

@Injectable({
  providedIn: 'root',
})
export class PoliciesService {
  // List of policies
  policiesList: Policies[] = [
    {
      customerName: 'John M. Doe',
      policyNumber: 100235,
      lineOfBusiness: 'Auto Insurance',
      ProductName: 'Comprehensive Car Coverage',
      issueDate: new Date('2023-01-15'),
      expireDate: new Date('2024-01-15'),
      GrossPremium: 1200.0,
      NetPremium: 1080.0,
      TotalSum: 50000.0,
    },
    {
      customerName: 'Sarah J. Smith',
      policyNumber: 100470,
      lineOfBusiness: 'Home Insurance',
      ProductName: 'Premium Home Protection',
      issueDate: new Date('2022-11-01'),
      expireDate: new Date('2023-11-01'),
      GrossPremium: 850.0,
      NetPremium: 765.0,
      TotalSum: 250000.0,
    },
    {
      customerName: 'Apex Industries Ltd.',
      policyNumber: 100705,
      lineOfBusiness: 'Commercial Insurance',
      ProductName: 'Business Liability Shield',
      issueDate: new Date('2023-03-10'),
      expireDate: new Date('2024-03-10'),
      GrossPremium: 4500.0,
      NetPremium: 4050.0,
      TotalSum: 1000000.0,
    },
    {
      customerName: 'Michael Chen',
      policyNumber: 100940,
      lineOfBusiness: 'Life Insurance',
      ProductName: 'Golden Life Secure 20',
      issueDate: new Date('2024-01-05'),
      expireDate: new Date('2044-01-05'),
      GrossPremium: 300.0,
      NetPremium: 270.0,
      TotalSum: 200000.0,
    },
    {
      customerName: 'Emily OConnor',
      policyNumber: 101175,
      lineOfBusiness: 'Health Insurance',
      ProductName: 'Complete Health Plus',
      issueDate: new Date('2023-06-20'),
      expireDate: new Date('2024-06-20'),
      GrossPremium: 180.0,
      NetPremium: 162.0,
      TotalSum: 500000.0,
    },
    {
      customerName: 'Green Earth Farms',
      policyNumber: 101410,
      lineOfBusiness: 'Agricultural Insurance',
      ProductName: 'Crop Protection Plan',
      issueDate: new Date('2023-09-01'),
      expireDate: new Date('2024-09-01'),
      GrossPremium: 2200.0,
      NetPremium: 1980.0,
      TotalSum: 150000.0,
    },
    {
      customerName: 'David & Martha Wilson',
      policyNumber: 101645,
      lineOfBusiness: 'Travel Insurance',
      ProductName: 'Global Travel Safeguard',
      issueDate: new Date('2023-12-10'),
      expireDate: new Date('2024-12-10'),
      GrossPremium: 75.0,
      NetPremium: 67.5,
      TotalSum: 100000.0,
    },
    {
      customerName: 'TechStart Innovations',
      policyNumber: 101880,
      lineOfBusiness: 'Cyber Insurance',
      ProductName: 'Digital Risk Manager',
      issueDate: new Date('2023-07-15'),
      expireDate: new Date('2024-07-15'),
      GrossPremium: 3200.0,
      NetPremium: 2880.0,
      TotalSum: 500000.0,
    },
    {
      customerName: 'Lisa Rodriguez',
      policyNumber: 102115,
      lineOfBusiness: 'Pet Insurance',
      ProductName: 'PawsCare Ultimate',
      issueDate: new Date('2023-04-01'),
      expireDate: new Date('2024-04-01'),
      GrossPremium: 45.0,
      NetPremium: 40.5,
      TotalSum: 15000.0,
    },
    {
      customerName: 'Ocean View Condos',
      policyNumber: 102350,
      lineOfBusiness: 'Property Insurance',
      ProductName: 'High-Rise Residence Cover',
      issueDate: new Date('2022-08-20'),
      expireDate: new Date('2023-08-20'),
      GrossPremium: 1500.0,
      NetPremium: 1350.0,
      TotalSum: 750000.0,
    },
  ];

  constructor() {}

  // Get all policies
  getPolicies(): Policies[] {
    return this.policiesList;
  }

  // Get total number of policies
  getTotalPolicies(): number {
    return this.policiesList.length;
  }

  // Get active policies (not expired)
  getActivePolicies(): number {
    const currentDate = new Date();
    return this.policiesList.filter(
      (policy) => policy.expireDate > currentDate
    ).length;
  }

  // Get expired policies
  getExpiredPolicies(): number {
    const currentDate = new Date();
    return this.policiesList.filter(
      (policy) => policy.expireDate <= currentDate
    ).length;
  }

  // Get policies by line of business
  getPoliciesByLineOfBusiness(lineOfBusiness: string): Policies[] {
    return this.policiesList.filter(
      (policy) => policy.lineOfBusiness === lineOfBusiness
    );
  }

  // Get policies by customer name
  getPoliciesByCustomerName(customerName: string): Policies[] {
    return this.policiesList.filter(
      (policy) => policy.customerName === customerName
    );
  }

  // Get total gross premium for all policies
  getTotalGrossPremium(): number {
    return this.policiesList.reduce(
      (total, policy) => total + policy.GrossPremium,
      0
    );
  }

  // Get total net premium for all policies
  getTotalNetPremium(): number {
    return this.policiesList.reduce(
      (total, policy) => total + policy.NetPremium,
      0
    );
  }

  // Get total sum insured for all policies
  getTotalSumInsured(): number {
    return this.policiesList.reduce(
      (total, policy) => total + policy.TotalSum,
      0
    );
  }
}