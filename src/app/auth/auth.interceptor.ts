import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from "./service/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    let token = this.authService.getToken();

    if (token) {
      const authReq = req.clone({
        setHeaders: {Authorization: 'Bearer ' + token},
      });

      return next.handle(authReq);
    }

    return next.handle(req);
  }
}
