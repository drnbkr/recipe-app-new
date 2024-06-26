import { HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { exhaustMap, take } from "rxjs/operators";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return this.authService.user.pipe(take(1),
            exhaustMap(user => {
                if (!user) {
                    return next.handle(req);
                }
                const modifiedHeaders = new HttpHeaders()
                    .set('Content-Type', 'application/json');

                const modifiedReq = req.clone({
                    params: new HttpParams().set('auth', user.token),
                    headers: modifiedHeaders
                });
                return next.handle(req);
            }));
    }

}