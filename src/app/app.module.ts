import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import {NewHumanComponent} from './new-human/new-human.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRouting} from './app-routing.module';
import {HumanService} from './human.service';
import {RouterModule} from '@angular/router';
import { ListHumanComponent } from './list-human/list-human.component';
import { EditHumanComponent } from './edit-human/edit-human.component';

@NgModule({
  declarations: [
    AppComponent,
    NewHumanComponent,
    ListHumanComponent,
    EditHumanComponent
  ],
  imports: [
    BrowserModule, AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule, FormsModule, ReactiveFormsModule,
    AppRouting, RouterModule
  ],
  providers: [HumanService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
