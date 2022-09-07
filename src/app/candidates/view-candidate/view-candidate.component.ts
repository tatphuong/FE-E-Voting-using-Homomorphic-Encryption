import { Component, OnInit } from '@angular/core';
import {CandidateService} from "../../_services/candidate.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {TuiDay} from "@taiga-ui/cdk";
import {Candidate} from "../../_model/candidate";

@Component({
  selector: 'app-view-candidate',
  templateUrl: './view-candidate.component.html',
  styleUrls: ['./view-candidate.component.less']
})
export class ViewCandidateComponent implements OnInit {
  candidate:Candidate;
  id:number;
  constructor(private candidateService:CandidateService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id =Number(paramMap.get('id')) ;
      const us=this.candidateService.findCandidateById(this.id).subscribe(candidate=>{
        this.candidate=candidate;
      })

    })
  }

  ngOnInit(): void {
  }

}
