import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../_services/user.service";
import {TUI_DEFAULT_MATCHER, TuiDay} from "@taiga-ui/cdk";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {User} from "../../_model/User";
const ROLES: readonly string[] = [
  'admin',
  'user',
];

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  providers:[UserService]
})
export class EditUserComponent implements OnInit {

  genders=["Male","Female"];
  search = '';
  min = new TuiDay(1900, 1, 1);
  max = TuiDay.currentLocal();
  id:number;
  user:User;
  ROLES: any;
  userForm:FormGroup= new FormGroup({
  name: new FormControl(Validators.required),
  email: new FormControl(Validators.required),
  dateOfBirth: new FormControl(Validators.required),
  gender: new FormControl( Validators.required),
  avatar: new FormControl(),
  address: new FormControl(),
    citizenIdentity: new FormControl(Validators.required)
});


  constructor(private userService:UserService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id =Number(paramMap.get('id')) ;
      const us=this.userService.findUserById(this.id).subscribe(user=>{
        console.log(user)
        var dateOfBirth=['01','01','1900']
        if (user.dateOfBirth!=null) {
          dateOfBirth = user.dateOfBirth.split("-")
        }
        this.userForm.setValue({
          name: user.name,
          email:user.email,
          dateOfBirth: new TuiDay(Number(dateOfBirth[2]),Number(dateOfBirth[1])-1,Number(dateOfBirth[0])),
          gender: user.gender,
          avatar: user.avatar,
          address: user.address,
          citizenIdentity: user.citizenIdentity
        })
      })

    })



  }

  ngOnInit(): void {

  }

/*  @tuiPure
  filter(search: string | null): readonly string[] {
    return this.ROLES.filter(item => TUI_DEFAULT_MATCHER(item, search || ''));
  }*/

  updateUser() {
    const user=this.userForm.value;
    this.userService.updateUser(this.id,user).subscribe(user=>{
      alert("update successful")
      console.log(user)
    },error => {
      console.log(error)
    })
  window.location.reload();
  }

}
