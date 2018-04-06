import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { MatchDetailsComponent } from '../match-details/match-details.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  activeTabName = '';

  @ViewChild(MatchDetailsComponent) matchDetails: MatchDetailsComponent;
  constructor() { }

  ngOnInit() {
  }

  changeTab(tab: string): void {
      this.matchDetails.updateMatchDetails(tab);
      this.activeTabName = tab;
  }
}
