import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
    TuiRootModule,
    TuiDialogModule,
    TuiNotificationsModule,
    TUI_SANITIZER,
    TuiTextfieldControllerModule, TuiHintControllerModule, TuiButtonModule, TuiDataListModule, TuiNotificationModule
} from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateTeamComponent } from './teams/create-election/create-team.component';
import {
    TuiAvatarModule, TuiBadgedContentModule, TuiComboBoxModule, TuiDataListWrapperModule,
    TuiFieldErrorModule, TuiFilterByInputPipeModule, TuiInputDateModule,
    TuiInputModule,
    TuiMultiSelectModule,
    TuiTextAreaModule
} from "@taiga-ui/kit";
import {TuiTableModule} from "@taiga-ui/addon-table";
import { EditElectionComponent } from './teams/edit-election/edit-election.component';
import {ListTeamComponent} from "./teams/list-election/list-team.component";



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    CreateTeamComponent,
    ListTeamComponent,
    EditElectionComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        TuiRootModule,
        BrowserAnimationsModule,
        TuiDialogModule,
        TuiNotificationsModule,
        TuiTextfieldControllerModule,
        TuiHintControllerModule,
        TuiButtonModule,
        TuiInputModule,
        TuiTextAreaModule,
        TuiFieldErrorModule,
        TuiTableModule,
        TuiAvatarModule,
        TuiMultiSelectModule,
        TuiDataListWrapperModule,
        TuiInputDateModule,
        TuiComboBoxModule,
        TuiFilterByInputPipeModule,
        TuiDataListModule,
        TuiNotificationModule,
        TuiBadgedContentModule
    ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
