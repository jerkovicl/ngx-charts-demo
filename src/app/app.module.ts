import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// trigger, state, style, transition, animate
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule } from '@angular/router';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CustomChartModule } from './custom-chart/custom.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ChartsComponent } from './charts/charts.component';
import { HomeComponent } from './home/home.component';

const ROUTES: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent,
    data: {
      //title: 'Homepage',
      meta: [{ name: 'description', content: 'This is an example Description Meta tag!' }],
      links: [
        { rel: 'canonical', href: 'http://blogs.example.com/blah/nice' },
        { rel: 'alternate', hreflang: 'es', href: 'http://es.example.com/' }
      ]
    }
  },
  {
    path: 'custom-chart', component: ChartsComponent,
    data: {
      title: 'Charts',
      meta: [{ name: 'chart component', content: 'This is an example chart component' }],
    }
  }

];
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ChartsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    NgxChartsModule,
    CustomChartModule,
    // Routing
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
