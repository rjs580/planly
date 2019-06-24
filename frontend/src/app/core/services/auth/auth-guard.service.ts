import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";
import {AuthService} from "./auth.service";
import {SweetAlert} from "../../../shared/service/sweetalert.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return of(this.auth.isAuthenticated()).pipe(map(logged => {
      if (!logged) {
        SweetAlert.error("Authentication", "Not logged in, please try again");
        this.router.navigate(["/home"]);
        return false;
      }

      return true;
    }));
  }
}
