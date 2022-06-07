import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListUserComponent } from './list-user/list-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import {TuiTableModule} from "@taiga-ui/addon-table";
import {
    TuiAvatarModule, TuiDataListWrapperModule,
    TuiFieldErrorModule, TuiInputCopyModule, TuiInputDateModule,
    TuiInputModule,
    TuiInputPasswordModule, TuiMultiSelectModule, TuiSelectModule,
    TuiTagModule,
    TuiTextAreaModule
} from "@taiga-ui/kit";
import {TuiButtonModule, TuiHintControllerModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListUserComponent,
    CreateUserComponent,
    EditUserComponent
  ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        TuiTableModule,
        TuiAvatarModule,
        TuiTagModule,
        TuiButtonModule,
        ReactiveFormsModule,
        TuiInputModule,
        TuiFieldErrorModule,
        TuiTextAreaModule,
        TuiTextfieldControllerModule,
        TuiHintControllerModule,
        TuiInputPasswordModule,
        TuiInputDateModule,
        FormsModule,
        TuiSelectModule,
        TuiDataListWrapperModule,
        TuiMultiSelectModule,
        TuiInputCopyModule
    ]
})
export class UsersModule { }
