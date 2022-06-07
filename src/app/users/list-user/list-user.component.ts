import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../_model/User";
import {UserService} from "../../_services/user.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.less']
})
export class ListUserComponent implements OnInit {
  readonly columns = [ 'name', 'email','dateOfBirth','gender','address','citizenIdentity', 'avatar', 'actions']
  users: User[];

  constructor(private userService: UserService,
              private router:Router) { }

  ngOnInit(): void {
    this.getAll();

  }
  getAll() {
    this.userService.findAllUser().subscribe(users => {
      this.users = users;
    });
  }

  remove(item: User) {
    // this.teamService.deleteTeam(item.id).subscribe(user=>{
    //   console.log("deleted"+user);
    // })
    this.users = this.users.filter(user => user !== item);
  }
  redirectUpdate(id:number){
    this.router.navigate(['users/edit',id]);

  }
}
