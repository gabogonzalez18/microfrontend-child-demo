import { isPlatformBrowser } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID, Type } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { SampleComponent } from "../sample/sample.component";


@Injectable()
export class CanActivateState implements CanActivate {

    state: string = 'c';

    loaded = false;
    myComponent?: Type<any>;

    isBrowser: boolean = false;

    constructor(
        private sampleComponent: SampleComponent, 
        public router: Router,
        @Inject(PLATFORM_ID) platformId: any) {
        this.isBrowser = isPlatformBrowser(platformId);
     }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.canActivateRoute(route, state);
    }

    canActivateRoute(route: any, state: RouterStateSnapshot): boolean | Observable<boolean> {

        console.log('canActivateRoute');
        
        return new Observable<boolean>((observer) => {
            this.sampleComponent.taskObservable.subscribe({
                next(taskPath) {
                    console.log('canActivateRoute taskPath', taskPath);
                    console.log('stateUrl', state.url);
                if(taskPath != state.url){
                    observer.next(false);
                }else{
                    observer.next(true);
                }
                observer.complete();
                }
              });
          });
    }
}

