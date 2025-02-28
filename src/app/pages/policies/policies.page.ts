import { Component, OnInit } from '@angular/core';
import { Policies } from './policies';
import { PopoverController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-policies',
  templateUrl: './policies.page.html',
  styleUrls: ['./policies.page.scss'],
})
export class PoliciesPage implements OnInit {
  policiesList: Policies[] = [];
  dismissPopover() {
    this.popoverController.dismiss();
  }
  constructor(private popoverController: PopoverController) {
    this.policiesList = [ {
      customerName: "John M. Doe",
      policyNumber: 100235,
      lineOfBusiness: "Auto Insurance",
      ProductName: "Comprehensive Car Coverage",
      issueDate: new Date("2023-01-15"),
      expireDate: new Date("2024-01-15"),
      GrossPremium: 1200.00,
      NetPremium: 1080.00,
      TotalSum: 50000.00
    },
    {
      customerName: "Sarah J. Smith",
      policyNumber: 100470,
      lineOfBusiness: "Home Insurance",
      ProductName: "Premium Home Protection",
      issueDate: new Date("2022-11-01"),
      expireDate: new Date("2023-11-01"),
      GrossPremium: 850.00,
      NetPremium: 765.00,
      TotalSum: 250000.00
    },
    {
      customerName: "Apex Industries Ltd.",
      policyNumber: 100705,
      lineOfBusiness: "Commercial Insurance",
      ProductName: "Business Liability Shield",
      issueDate: new Date("2023-03-10"),
      expireDate: new Date("2024-03-10"),
      GrossPremium: 4500.00,
      NetPremium: 4050.00,
      TotalSum: 1000000.00
    },
    {
      customerName: "Michael Chen",
      policyNumber: 100940,
      lineOfBusiness: "Life Insurance",
      ProductName: "Golden Life Secure 20",
      issueDate: new Date("2024-01-05"),
      expireDate: new Date("2044-01-05"),
      GrossPremium: 300.00,
      NetPremium: 270.00,
      TotalSum: 200000.00
    },
    {
      customerName: "Emily O'Connor",
      policyNumber: 101175,
      lineOfBusiness: "Health Insurance",
      ProductName: "Complete Health Plus",
      issueDate: new Date("2023-06-20"),
      expireDate: new Date("2024-06-20"),
      GrossPremium: 180.00,
      NetPremium: 162.00,
      TotalSum: 500000.00
    },
    {
      customerName: "Green Earth Farms",
      policyNumber: 101410,
      lineOfBusiness: "Agricultural Insurance",
      ProductName: "Crop Protection Plan",
      issueDate: new Date("2023-09-01"),
      expireDate: new Date("2024-09-01"),
      GrossPremium: 2200.00,
      NetPremium: 1980.00,
      TotalSum: 150000.00
    },
    {
      customerName: "David & Martha Wilson",
      policyNumber: 101645,
      lineOfBusiness: "Travel Insurance",
      ProductName: "Global Travel Safeguard",
      issueDate: new Date("2023-12-10"),
      expireDate: new Date("2024-12-10"),
      GrossPremium: 75.00,
      NetPremium: 67.50,
      TotalSum: 100000.00
    },
    {
      customerName: "TechStart Innovations",
      policyNumber: 101880,
      lineOfBusiness: "Cyber Insurance",
      ProductName: "Digital Risk Manager",
      issueDate: new Date("2023-07-15"),
      expireDate: new Date("2024-07-15"),
      GrossPremium: 3200.00,
      NetPremium: 2880.00,
      TotalSum: 500000.00
    },
    {
      customerName: "Lisa Rodriguez",
      policyNumber: 102115,
      lineOfBusiness: "Pet Insurance",
      ProductName: "PawsCare Ultimate",
      issueDate: new Date("2023-04-01"),
      expireDate: new Date("2024-04-01"),
      GrossPremium: 45.00,
      NetPremium: 40.50,
      TotalSum: 15000.00
    },
    {
      customerName: "Ocean View Condos",
      policyNumber: 102350,
      lineOfBusiness: "Property Insurance",
      ProductName: "High-Rise Residence Cover",
      issueDate: new Date("2022-08-20"),
      expireDate: new Date("2023-08-20"),
      GrossPremium: 1500.00,
      NetPremium: 1350.00,
      TotalSum: 750000.00
    }];
   }

  ngOnInit() {
  }

}
