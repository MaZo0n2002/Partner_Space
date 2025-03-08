import { Component, OnInit } from '@angular/core';
import { InsuranceService } from 'src/app/services/insurance.service';
import { PopoverController } from '@ionic/angular';
import { Insurance } from './insurance';
@Component({
  standalone: false,
  selector: 'app-insurance',
  templateUrl: './insurance.page.html',
  styleUrls: ['./insurance.page.scss'],
})
export class InsurancePage implements OnInit {
  InsuranceList: Insurance[] = [];

  dismissPopover() {
    this.popoverController.dismiss();
  }

  constructor( private InsuranceService: InsuranceService,
      private popoverController: PopoverController) { }

  ngOnInit() {
    this.InsuranceList = this.InsuranceService.getInsurance();
  }

}
