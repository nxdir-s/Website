import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { MatchDetails } from '../models/match-details';

@Injectable()
export class MatchDetailsService {
    constructor(private http: HttpClient) { }

    private matchDetailsApiAddress = 'http://localhost:5000/'

    getMatchDetails(): Observable<any[]> {
        var address = this.matchDetailsApiAddress + "matchDetailsApi/matchDetails/byAccID/47440170";
        return this.http.get<any>(address)
            .map(this.extractMatchDetails);

    }

    private extractMatchDetails(res: HttpResponse<any>): MatchDetails[] {
        let body: any = res;
        var matchDetails = new Array<MatchDetails>();
        if (body.status.success && body.data != null) {
            matchDetails = body.data;
        }
        return matchDetails;
    }
}