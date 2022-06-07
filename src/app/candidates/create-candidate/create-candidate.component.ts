import {Component, Inject, OnInit} from '@angular/core';
import {TuiDay} from "@taiga-ui/cdk";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CandidateService} from "../../_services/candidate.service";

@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.css']
})
export class CreateCandidateComponent implements OnInit {
  min = new TuiDay(1900, 1, 1);
  max = TuiDay.currentLocal();
  genders=["Male","Female"];
  message='';
  candidateForm=new FormGroup({
    name: new FormControl('', Validators.required),
    citizenIdentity: new FormControl('',Validators.required),
    avatar: new FormControl(''),
    dateOfBirth: new FormControl(new TuiDay(1999,8,9),Validators.required),
    gender: new FormControl('', Validators.required),
    occupation: new FormControl(''),
    address: new FormControl(''),
    education: new FormControl(''),
    nationality: new FormControl('viet nam', Validators.required)
  });

  constructor(private candidateService:CandidateService) {

  }

  ngOnInit(): void {
  }

  submit() {
    const candidate = this.candidateForm.value;
    this.candidateService.createCandidate(candidate).subscribe(candidate=>{
      this.message="Create candidate success"
      alert("create candidate successful")
    },error => {
      console.log(error);
      alert(error.error.message)
    })
    this.candidateForm.reset();

  }
}

