import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TUI_DEFAULT_MATCHER, TuiDay, tuiPure} from "@taiga-ui/cdk";
import {UserService} from "../../_services/user.service";

const ROLES: readonly string[] = [
  'admin',
  'user',
];


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  min = new TuiDay(1900, 1, 1);
  max = TuiDay.currentLocal();
  genders=["Male","Female"];
  message='';
  search = '';
  userForm=new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    roles: new FormControl([ROLES[1]], Validators.required),
    dateOfBirth: new FormControl(new TuiDay(1999,8,9),Validators.required),
    gender: new FormControl('', Validators.required),
    avatar: new FormControl(''),
    address: new FormControl(''),
    about: new FormControl(''),
    citizenIdentity: new FormControl('',Validators.required)
  });

  constructor(private userService:UserService) {

  }

  ngOnInit(): void {
  }

  submit() {
    const user = this.userForm.value;
    this.userService.createUser(user).subscribe(team=>{
      this.message="Create user success"
    },error => {
      console.log(error);
    })
    this.userForm.reset();

  }
  @tuiPure
  filter(search: string | null): readonly string[] {
    return ROLES.filter(item => TUI_DEFAULT_MATCHER(item, search || ''));
  }
}
