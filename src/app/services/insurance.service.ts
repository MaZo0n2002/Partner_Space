import { Injectable } from '@angular/core';
import { Insurance } from '../pages/insurance/insurance'; // Adjust the import path

@Injectable({
  providedIn: 'root',
})
export class InsuranceService {
  // List of insurance policies
  InsuranceList: Insurance[] = [
    {
      customerName: 'John M. Doe',
      InsuranceNumber: 100235,
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
      InsuranceNumber: 100470,
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
      InsuranceNumber: 100705,
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
      InsuranceNumber: 100940,
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
      InsuranceNumber: 101175,
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
      InsuranceNumber: 101410,
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
      InsuranceNumber: 101645,
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
      InsuranceNumber: 101880,
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
      InsuranceNumber: 102115,
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
      InsuranceNumber: 102350,
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

  // Get all insurance policies
  getInsurance(): Insurance[] {
    return this.InsuranceList;
  }

  // Get total number of insurance policies
  getTotalInsurance(): number {
    return this.InsuranceList.length;
  }

  // Get active insurance policies (not expired)
  getActiveInsurance(): number {
    const currentDate = new Date();
    return this.InsuranceList.filter(
      (insurance) => insurance.expireDate > currentDate
    ).length;
  }

  // Get expired insurance policies
  getExpiredInsurance(): number {
    const currentDate = new Date();
    return this.InsuranceList.filter(
      (insurance) => insurance.expireDate <= currentDate
    ).length;
  }

  // Get insurance policies by line of business
  getInsuranceByLineOfBusiness(lineOfBusiness: string): Insurance[] {
    return this.InsuranceList.filter(
      (insurance) => insurance.lineOfBusiness === lineOfBusiness
    );
  }

  // Get insurance policies by customer name
  getInsuranceByCustomerName(customerName: string): Insurance[] {
    return this.InsuranceList.filter(
      (insurance) => insurance.customerName === customerName
    );
  }

  // Get total gross premium for all insurance policies
  getTotalGrossPremium(): number {
    return this.InsuranceList.reduce(
      (total, insurance) => total + insurance.GrossPremium,
      0
    );
  }

  // Get total net premium for all insurance policies
  getTotalNetPremium(): number {
    return this.InsuranceList.reduce(
      (total, insurance) => total + insurance.NetPremium,
      0
    );
  }

  // Get total sum insured for all insurance policies
  getTotalSumInsured(): number {
    return this.InsuranceList.reduce(
      (total, insurance) => total + insurance.TotalSum,
      0
    );
  }
}