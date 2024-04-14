import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private route: Router) {
   }

  goAnOtherPage() {
    this.route.navigate(['goals']);
  }

}
