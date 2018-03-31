import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

import { MatchDetailsService } from './match-details.service';
import { MatchDetails } from '../models/match-details';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {

  public matchDetails = new Array<MatchDetails>();
  
  constructor(private matchDetailsService: MatchDetailsService) { }

  ngOnInit() {
      this.matchDetailsService.getMatchDetails()
        .subscribe((res) => {
          this.matchDetails = res;
        });
  }

}
