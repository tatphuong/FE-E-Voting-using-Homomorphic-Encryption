import {Component, Inject, Injector, OnInit} from '@angular/core';
import {ElectionService} from "../../_services/team.service";
import {Router} from "@angular/router";
import {Election} from "../../_model/election";

@Component({
    selector: 'app-list-election',
    templateUrl: './list-team.component.html',
    styleUrls: ['./list-team.component.less']
})
export class ListTeamComponent implements OnInit {
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

    remove(item: Election) {
        if(confirm("Are you sure")){
            this.electionService.deleteElection(item.id).subscribe(team=>{
                console.log("deleted"+team);
            })
            this.elections = this.elections.filter(team => team !== item);
        }
    }
    redirectUpdate(id:number){
        this.router.navigate(['elections/edit',id]);

    }

}
