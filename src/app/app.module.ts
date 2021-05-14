import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { MyServiceService } from './my-service.service';
import { EditComponent } from './edit/edit.component';
import {FormsModule} from "@angular/forms";
import { AddComponent } from './add/add.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    AddComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MyServiceService, ListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
