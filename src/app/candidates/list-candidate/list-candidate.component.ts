import {Component, Inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CandidateService} from "../../_services/candidate.service";
import {Candidate} from "../../_model/candidate";
import {TuiDialogService} from "@taiga-ui/core";

@Component({
  selector: 'app-list-candidate',
  templateUrl: './list-candidate.component.html',
  styleUrls: ['./list-candidate.component.css']
})
export class ListCandidateComponent implements OnInit {

  readonly columns = [ 'name', 'citizenIdentity','dateOfBirth','gender','address','occupation', 'avatar','nationality', 'actions']
  candidates: Candidate[];

  constructor(private candidateService: CandidateService,
              private router:Router,
              @Inject(TuiDialogService) private readonly dialogService: TuiDialogService) { }

  ngOnInit(): void {
    this.getAll();

  }
  getAll() {
    this.candidateService.findAllCandidate().subscribe(candidates => {
      this.candidates = candidates;
    });
  }

  remove(item: Candidate) {
    // this.teamService.deleteTeam(item.id).subscribe(user=>{
    //   console.log("deleted"+user);
    // })
    if(confirm("Are you sure to delete"+ item.name)){
      this.dialogService
          .open('This is a plain string dialog', {label: 'Heading', size: 's'})
          .subscribe();
      this.candidates = this.candidates.filter(candidate => candidate !== item);
    }

  }
  redirectUpdate(id:number){
    this.router.navigate(['candidates/edit',id]);

  }


}
