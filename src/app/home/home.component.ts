import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {Election} from "../_model/election";
import {ElectionService} from "../_services/team.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  readonly columns = [ 'name', 'startTime', 'endTime', 'actions']
  elections: Election[];

  constructor(private electionService: ElectionService,
              private router:Router) {
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.electionService.findAllElection().subscribe(elections => {
      this.elections = elections;
    });
  }

  redirectView(id:number){
    this.router.navigate(['elections/view',id]);

  }
}
