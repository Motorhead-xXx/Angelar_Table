import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderTableComponent} from "./header-table/header-table.component";
import { RowTableComponent } from './row-table/row-table.component';
import { ChildRowTableComponent } from './child-row-table/child-row-table.component';
import { ButtonWrapperComponent } from './header-table/button-wrapper/button-wrapper.component';
import {NewServiceService} from "./new-service.service";
import {HttpClientModule} from "@angular/common/http";
import { YesNoPipe } from './yes-no.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTableComponent,
    RowTableComponent,
    ChildRowTableComponent,
    ButtonWrapperComponent,
    YesNoPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
