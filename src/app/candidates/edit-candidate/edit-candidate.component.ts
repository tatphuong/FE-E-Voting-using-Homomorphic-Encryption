import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TuiDay} from "@taiga-ui/cdk";
import {CandidateService} from "../../_services/candidate.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-edit-candidate',
  templateUrl: './edit-candidate.component.html',
  styleUrls: ['./edit-candidate.component.css']
})
export class EditCandidateComponent implements OnInit {
  min = new TuiDay(1900, 1, 1);
  max = TuiDay.currentLocal();
  genders=["Male","Female"];
  message='';
  id:number;
  candidateForm=new FormGroup({
    name: new FormControl(Validators.required),
    citizenIdentity: new FormControl(Validators.required),
    avatar: new FormControl(),
    dateOfBirth: new FormControl(Validators.required),
    gender: new FormControl( Validators.required),
    occupation: new FormControl(),
    address: new FormControl(),
    education: new FormControl(),
    nationality: new FormControl( Validators.required)
  });

  constructor(private candidateService:CandidateService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id =Number(paramMap.get('id')) ;
      const us=this.candidateService.findCandidateById(this.id).subscribe(candidate=>{
        var dateOfBirth=['01','01','1900']
        if (candidate.dateOfBirth!=null) {
          dateOfBirth = candidate.dateOfBirth.split("-")
        }
        this.candidateForm.setValue({
          name: candidate.name,
          occupation: candidate.occupation,
          dateOfBirth: new TuiDay(Number(dateOfBirth[2]),Number(dateOfBirth[1])-1,Number(dateOfBirth[0])),
          gender: candidate.gender,
          avatar: candidate.avatar,
          address: candidate.address,
          citizenIdentity: candidate.citizenIdentity,
          education: candidate.education,
          nationality: candidate.nationality
        })
      })

    })
  }

  ngOnInit(): void {
  }
  submit() {
    const candidate = this.candidateForm.value;
    this.candidateService.updateCandidate(this.id,candidate).subscribe(candidate=>{
      console.log(candidate)
      alert("update thanh cong")
      window.location.reload()
    },error => {
      console.log(error);
    })
  }

}
