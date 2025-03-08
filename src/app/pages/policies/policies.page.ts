import { Component, OnInit } from '@angular/core';
import { Policies } from './policies';
import { PopoverController } from '@ionic/angular';
import { PoliciesService } from 'src/app/services/policies.service';
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
  constructor( 
        private PoliciesService: PoliciesService,
        private popoverController: PopoverController
  ) {}

  ngOnInit() {
    this.policiesList = this.PoliciesService.getPolicies();
  }

}
