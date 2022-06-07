import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ElectionService} from "../../_services/team.service";
import {Election} from "../../_model/election";
import {TUI_LAST_DAY, TuiDay} from "@taiga-ui/cdk";
import {TuiNamedDay} from "@taiga-ui/kit";

@Component({
  selector: 'app-create-election',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTeamComponent implements OnInit {
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
  electionForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    startTime: new FormControl(Validators.required),
    endTime: new FormControl(Validators.required),
  });
  election:Election;
  message:string;

  constructor(private electionService:ElectionService) { }

  ngOnInit(): void {
  }
  submit() {
    const election = this.electionForm.value;
    this.electionService.createElection(election).subscribe(election=>{
      this.election=election;
      this.message="Create a election success"
    },error => {
      console.log(error);
    })
    this.electionForm.reset();
  }

}
