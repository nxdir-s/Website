import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

import { MatchDetailsService } from './match-details.service';
import { MatchDetails, MatchDetailFilter } from '../models/match-details';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {

  public matchDetails = new Array<MatchDetails>();
  public accountId = "47440170";
  public testFilter: MatchDetailFilter = {AccountId: "47440170", Queue: ""};
  
  constructor(private matchDetailsService: MatchDetailsService) { }

  ngOnInit() {
      this.matchDetailsService.getMatchDetails(this.testFilter)
        .subscribe((res) => {
          this.matchDetails = res;
        });
  }

  updateMatchDetails(queue: string): void {
      let filter = new MatchDetailFilter;
      filter.AccountId = this.accountId;
      filter.Queue = queue;

      this.matchDetailsService.getMatchDetails(filter)
        .subscribe((res) => {
          this.matchDetails = res;
        });
  }

}
