import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import {UserService} from "../_services/user.service";
import {FormBuilder} from "@angular/forms";
import {User} from "../_model/User";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;
  avatarUrl:string
  fullUserInfo:User;

  constructor(private token: TokenStorageService,private userService:UserService,private fb:FormBuilder) {

  }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.getInfoUser(this.currentUser.id)
    this.userService.findUserById(this.currentUser.id).subscribe(user =>{
    this.fullUserInfo=user;
  })

  }
  getInfoUser(id: number) {
    /*this.userService.findUserById(id).subscribe(user =>{
      this.fullProfile=this.fb.group({
        username: this.fb.control(user.username),
        name: this.fb.control(user.name),
        email:this.fb.control(user.email),
        dateOfBirth:this.fb.control(user.dateOfBirth),
        sex:this.fb.control(user.gender),
        dayIn:this.fb.control(user.dateOfBirth),
        about:this.fb.control(user.about),
        selfIntroduce:this.fb.control(user.selfIntroduce),
        progLanguages:this.fb.control(user.progLanguages)
      })
      this.avatarUrl=user.avatar;


    })*/
  }
  updateUser(id: number) {
    /*    const user = this.fullProfile.value;
        this.userService.updateUser(id, user).subscribe(() => {
          alert("Update successful!!!")
        });
      }*/
  }
}
