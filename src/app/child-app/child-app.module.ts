import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChildAppComponent } from './child-app.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ChildAppComponent],
  exports: [ChildAppComponent],
  imports: [CommonModule],
  providers: [],
})
export class ChildAppModule {}
