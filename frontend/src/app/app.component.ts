import {Component, OnDestroy, OnInit} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {filter, map, mergeMap} from "rxjs/operators";
import {Title} from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private titleSubscription: Subscription;

  constructor(private translate: TranslateService, private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) {
    translate.setDefaultLang("en");
    translate.use("en");
  }

  ngOnInit() {
    this.subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => window.scrollTo(0, 0));

    this.titleSubscription = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter((route) => route.outlet === "primary"),
      mergeMap((route) => route.data)
    ).subscribe((event) => this.titleService.setTitle(event["title"]));
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    if (this.titleSubscription) {
      this.titleSubscription.unsubscribe();
    }
  }
}
