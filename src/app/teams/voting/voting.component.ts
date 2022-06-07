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
    candidatesInElection: any;
    election:Election;
    id: number;
    isVoted: boolean;
    user: User;
    ballot: bigint;
    votingReq: VotingRequest | null;
    message=''
    readonly value = [13769, 12367, 10172, 3018, 2592];
    readonly labels = ['Food', 'Cafe', 'Open Source', 'Taxi', 'Other'];
    readonly columns = ['name', 'citizenIdentity', 'dateOfBirth', 'avatar', 'nationality', 'numberOfVotes', 'action']

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
        console.log(this.ballot)
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
