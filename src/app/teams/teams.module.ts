import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { VotingComponent } from './voting/voting.component';
import {TuiTableModule} from "@taiga-ui/addon-table";
import {TuiAccordionModule, TuiAvatarModule} from "@taiga-ui/kit";
import {TuiNotificationModule} from "@taiga-ui/core";
import {QRCodeModule} from "angularx-qrcode";


@NgModule({
  declarations: [
    VotingComponent
  ],
    imports: [
        CommonModule,
        TeamsRoutingModule,
        TuiTableModule,
        TuiAvatarModule,
        TuiNotificationModule,
        QRCodeModule,
        TuiAccordionModule
    ]
})
export class TeamsModule { }
