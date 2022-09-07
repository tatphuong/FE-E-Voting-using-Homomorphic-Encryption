import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ElectionService} from "../../_services/team.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {TUI_LAST_DAY, TuiDay} from "@taiga-ui/cdk";
import {TuiNamedDay} from "@taiga-ui/kit";
import {Election} from "../../_model/election";
import {CandidateService} from "../../_services/candidate.service";
import {Candidate} from "../../_model/candidate";
import {delay, of} from "rxjs";

@Component({
  selector: 'app-edit-election',
  templateUrl: './edit-election.component.html',
  styleUrls: ['./edit-election.component.css']
})
export class EditElectionComponent implements OnInit {
  from: TuiDay | null = null;
  to: TuiDay | null = null;
  min = new TuiDay(2017, 9, 4);
  max = TuiDay.currentLocal();
  items = [
    new TuiNamedDay(
        TUI_LAST_DAY.append({year: -1}),
        'Until today',
        TuiDay.currentLocal(),
    ),
  ];
  electionEditForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    startTime: new FormControl(Validators.required),
    endTime: new FormControl(Validators.required),
  });
  election:Election;
  id:number;
  candidates:Candidate[];
  formAddCandidate: FormGroup;
  message:string | null;
  candidatesInElection:any;
  readonly columns = [ 'name', 'citizenIdentity','dateOfBirth','avatar', 'nationality', 'numberOfVotes']


  constructor(private electionService:ElectionService,  private activatedRoute: ActivatedRoute,
              private  candidateService:CandidateService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id =Number(paramMap.get('id')) ;
      const us=this.electionService.findElectionById(this.id).subscribe(election=>{
        let startTime =election.startTime.split("-")
        let endTime =election.endTime.split("-")
        this.electionEditForm.setValue({
          name:election.name,
          startTime:new TuiDay(Number(startTime[2]),Number(startTime[1])-1,Number(startTime[0])),
          endTime:new TuiDay(Number(endTime[2]),Number(endTime[1])-1,Number(endTime[0]))
        });
        console.log(startTime)
      })

    })

  }

  ngOnInit(): void {
    this.getAllCandidate();
    this.formAddCandidate=new FormGroup({
      candidate: new FormControl()
    })
    this.getAllCandidateInElection();
  }
  submit() {
    const election = this.electionEditForm.value;
    this.electionService.updateElection(this.id,election).subscribe(election=>{
      this.election=election;
      alert("update thanh cong")
      window.location.reload()
    },error => {
      console.log(error);
    })
  }

  addCandidate() {
    console.log(this.formAddCandidate.value.candidate);
    const candidate=this.formAddCandidate.value.candidate;
    this.electionService.addCandidate(this.id,candidate.id).subscribe(message =>{
      console.log(message)
    })
    window.location.reload();

  }
  getAllCandidate() {
    this.candidateService.findAllCandidate().subscribe(candidates => {
      this.candidates = candidates;
    });
  }
  getAllCandidateInElection() {
    this.electionService.getTotalVoteForAD(this.id).subscribe(candidatesInElection => {
      this.candidatesInElection=candidatesInElection;
    });
  }
  readonly stringify = ({name}: {name: string}): string => name;
  value = null;

  // @ts-ignore
  readonly items$ = of(this.candidates).pipe(delay(5000));
}
