import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { Routing } from './app.routing';
import { AuthGuard } from './_guard/index';

import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthenticationService } from './authentication/authentication.service';
import { HomepageComponent } from './homepage/homepage.component';
import { PostComponent } from './post/post.component';
import { PostRepositoryService } from './post/post-repository.service';
import {MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule, MatGridListModule} from "@angular/material";
import { CdkTableModule } from "@angular/cdk/table";
import { MatTableModule } from "@angular/material/table";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UserComponent } from './user/user.component';
import {UserRepositoryService} from "./user/user-repository.service";
import { NavbarComponent } from './navbar/navbar.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { FooterComponent } from './footer/footer.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
    return new AuthHttp( new AuthConfig({
        tokenGetter: (() => localStorage.getItem('id_token'))
    }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AuthenticationComponent,
    PostComponent,
    UserComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    Routing,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    CdkTableModule,
    MatTableModule,
    MatGridListModule,
      FlexLayoutModule
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    },
    AuthGuard,
    AuthenticationService,
    PostRepositoryService,
    UserRepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
