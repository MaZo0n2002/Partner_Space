import { Component, OnInit } from '@angular/core';
import { ClaimsService } from '../services/claims.service'; // Adjust the import path
import { PoliciesService } from '../services/policies.service'; // Adjust the import path
import { InsuranceService } from '../services/insurance.service'; // Adjust the import path

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  // Claims Metrics
  claimsMetrics = {
    totalClaims: 0,
    openClaims: 0,
    closedClaims: 0,
  };

  // Policies Metrics
  policiesMetrics = {
    totalPolicies: 0,
    activePolicies: 0,
    expiredPolicies: 0,
    totalGrossPremium: 0,
    totalNetPremium: 0,
    totalSumInsured: 0,
  };

  // Insurance Metrics
  insuranceMetrics = {
    totalInsurance: 0,
    activeInsurance: 0,
    expiredInsurance: 0,
    totalGrossPremium: 0,
    totalNetPremium: 0,
    totalSumInsured: 0,
  };

  constructor(
    private claimsService: ClaimsService,
    private policiesService: PoliciesService, // Use camelCase
    private insuranceService: InsuranceService // Use camelCase
  ) {}

  ngOnInit() {
    // Fetch Claims Metrics
    this.claimsMetrics.totalClaims = this.claimsService.getTotalClaims();
    this.claimsMetrics.openClaims = this.claimsService.getOpenClaims();
    this.claimsMetrics.closedClaims = this.claimsService.getClosedClaims();

    // Fetch Policies Metrics
    this.policiesMetrics.totalPolicies = this.policiesService.getTotalPolicies();
    this.policiesMetrics.activePolicies = this.policiesService.getActivePolicies();
    this.policiesMetrics.expiredPolicies = this.policiesService.getExpiredPolicies();
    this.policiesMetrics.totalGrossPremium = this.policiesService.getTotalGrossPremium();
    this.policiesMetrics.totalNetPremium = this.policiesService.getTotalNetPremium();
    this.policiesMetrics.totalSumInsured = this.policiesService.getTotalSumInsured();

    // Fetch Insurance Metrics
    this.insuranceMetrics.totalInsurance = this.insuranceService.getTotalInsurance();
    this.insuranceMetrics.activeInsurance = this.insuranceService.getActiveInsurance();
    this.insuranceMetrics.expiredInsurance = this.insuranceService.getExpiredInsurance();
    this.insuranceMetrics.totalGrossPremium = this.insuranceService.getTotalGrossPremium();
    this.insuranceMetrics.totalNetPremium = this.insuranceService.getTotalNetPremium();
    this.insuranceMetrics.totalSumInsured = this.insuranceService.getTotalSumInsured();
  }
}