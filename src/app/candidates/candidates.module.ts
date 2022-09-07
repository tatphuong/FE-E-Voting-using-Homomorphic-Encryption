import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesRoutingModule } from './candidates-routing.module';
import {ListCandidateComponent} from "./list-candidate/list-candidate.component";
import { CreateCandidateComponent } from './create-candidate/create-candidate.component';
import { EditCandidateComponent } from './edit-candidate/edit-candidate.component';
import {TuiTableModule} from "@taiga-ui/addon-table";
import {
    TuiAvatarModule, TuiDataListWrapperModule,
    TuiFieldErrorModule,
    TuiInputDateModule,
    TuiInputModule, TuiMultiSelectModule, TuiSelectModule,
    TuiTextAreaModule
} from "@taiga-ui/kit";
import {
    TuiButtonModule,
    TuiHintControllerModule,
    TuiNotificationModule,
    TuiTextfieldControllerModule
} from "@taiga-ui/core";
import {ReactiveFormsModule} from "@angular/forms";
import { ViewCandidateComponent } from './view-candidate/view-candidate.component';
import {TuiSheetModule} from "@taiga-ui/addon-mobile";


@NgModule({
  declarations: [
      ListCandidateComponent,
      CreateCandidateComponent,
      EditCandidateComponent,
      ViewCandidateComponent
  ],
    imports: [
        CommonModule,
        CandidatesRoutingModule,
        TuiTableModule,
        TuiAvatarModule,
        TuiButtonModule,
        ReactiveFormsModule,
        TuiInputModule,
        TuiFieldErrorModule,
        TuiInputDateModule,
        TuiTextAreaModule,
        TuiSelectModule,
        TuiMultiSelectModule,
        TuiDataListWrapperModule,
        TuiNotificationModule,
        TuiTextfieldControllerModule,
        TuiHintControllerModule,
        TuiSheetModule
    ]
})
export class CandidatesModule { }
