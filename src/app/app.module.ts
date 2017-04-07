import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// trigger, state, style, transition, animate
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CustomChartModule } from './custom-chart/custom.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    NgxChartsModule,
    CustomChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
