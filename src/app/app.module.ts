import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BulkUploadModule } from './bulk-upload/bulk-upload.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BulkUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
