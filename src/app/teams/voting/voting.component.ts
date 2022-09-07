import {Component, OnInit} from '@angular/core';
import {ElectionService} from "../../_services/team.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {TokenStorageService} from "../../_services/token-storage.service";
import {User} from "../../_model/User";
import {VotingRequest} from "../../_model/voting-request";
import {Election} from "../../_model/election";

@Component({
    selector: 'app-voting',
    templateUrl: './voting.component.html',
    styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {
    present:Date=new Date();
    candidatesInElection: any;
    election:Election;
    id: number;
    isVoted: boolean;
    user: User;
    ballot: bigint;
    votingReq: VotingRequest | null;
    message='';
    showVote=false;
    // readonly value = [13769, 12367, 10172, 3018, 2592];
    // readonly labels = ['Food', 'Cafe', 'Open Source', 'Taxi', 'Other'];
    readonly columns = ['name', 'citizenIdentity', 'dateOfBirth', 'avatar', 'nationality', 'numberOfVotes', 'action']
    // readonly columns = ['name', 'citizenIdentity', 'dateOfBirth', 'avatar', 'nationality', 'action']

    constructor(private electionService: ElectionService,
                private activatedRoute: ActivatedRoute,
                private tokenStorageService: TokenStorageService) {
        this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
            this.id = Number(paramMap.get('id'));
        })
        this.user = this.tokenStorageService.getUser();
        this.checkVoted(this.id, this.user.id);
        this.getBallot(this.id, this.user.id);
        this.getElection(this.id);
    }

    ngOnInit(): void {
        this.getAllCandidateInElection();
    }

    getAllCandidateInElection() {
        this.electionService.getTotalVotes(this.id).subscribe(candidatesInElection => {
            this.candidatesInElection = candidatesInElection;
        });
    }

    checkVoted(id, userId) {
        this.electionService.checkVoted(id, userId).subscribe(value => {
            this.isVoted = value;
        });
    }
    getElection(id:number){
        this.electionService.findElectionById(id).subscribe(election =>{
            this.election=election;
            let endTimeS =election.endTime.split("-")
            const endTime=new Date(endTimeS[2],endTimeS[1]-1,endTimeS[0]);
            console.log(endTime.toDateString())
            if(this.present.getTime()>endTime.getTime()){
                this.showVote=true;
                console.log("thank to" + this.showVote);
            }
        })
    }

    getBallot(id, userId) {
        this.electionService.getBallot(id, userId).subscribe(ballot => {
            this.ballot = ballot;
        });
    }

    voting(candidateId: number) {
        this.votingReq = {
            candidateId: candidateId,
            userId: this.user.id
        };
        this.electionService.voting(this.id, this.votingReq).subscribe(ballot => {
            this.ballot = ballot;
            window.location.reload()
        },error => {
            this.message=error.error.message
            console.log(error.error.message)
        })

    }
}
