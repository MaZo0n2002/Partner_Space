import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ClaimsService } from 'src/app/services/claims.service'; // Adjust the import path
import { Claims } from './claims';// Adjust the import path

@Component({
  standalone:false,
  selector: 'app-claims',
  templateUrl: './claims.page.html',
  styleUrls: ['./claims.page.scss'],
})
export class ClaimsPage implements OnInit {
  claimsList: Claims[] = [];

  constructor(
    private claimsService: ClaimsService,
    private popoverController: PopoverController
  ) {}

  ngOnInit() {
    this.claimsList = this.claimsService.getClaims();
  }

  dismissPopover() {
    this.popoverController.dismiss();
  }
}