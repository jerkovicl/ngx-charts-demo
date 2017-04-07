import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, NavigationEnd, ActivatedRoute, PRIMARY_OUTLET } from '@angular/router';
import { Meta, Title, DOCUMENT, MetaDefinition } from '@angular/platform-browser';
import '../shared/helpers/rx-imports'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private endPageTitle: string = 'Zagreb';
  private defaultPageTitle: string = 'My App';
  private routerSub$: Subscription;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private meta: Meta
    /*private linkService: LinkService*/) { }

  public ngOnInit(): void {
    this._changeTitleOnNavigation();
  }
  public ngOnDestroy(): void {
    // Subscription clean-up
    this.routerSub$.unsubscribe();
  }
  private _changeTitleOnNavigation() {

    this.routerSub$ = this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe((event) => {
        this._setMetaAndLinks(event);
      });
  }
  private _setMetaAndLinks(event) {

    // Set Title if available, otherwise leave the default Title
    const title = event['title']
      ? `${event['title']} - ${this.endPageTitle}`
      : `${this.defaultPageTitle} - ${this.endPageTitle}`;

    this.title.setTitle(title);

    const metaData = event['meta'] || [];
    const linksData = event['links'] || [];

    for (let i = 0; i < metaData.length; i++) {
      this.meta.updateTag(metaData[i]);
    }

    // for (let i = 0; i < linksData.length; i++) {
    //   this.linkService.addTag(linksData[i]);
    // }
  }

}
