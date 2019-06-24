import {PreloadingStrategy, Route} from "@angular/router";
import {Observable, of, timer} from "rxjs";
import {flatMap} from "rxjs/operators";

export class AppPreloadingStrategy implements PreloadingStrategy {
  private preloadDelayTime = 2000; // 5s

  preload(route: Route, load: Function): Observable<any> {
    if (route.data && route.data["preload"]) {
      if (route.data.delay) {
        return timer(this.preloadDelayTime).pipe(flatMap(() => {
          return load();
        }));
      }
      return load();
    } else {
      return of(null);
    }
  }
}
