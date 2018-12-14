
import {RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from "./homepage/homepage.component";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {PostComponent} from "./post/post.component";
import { AuthGuard } from './_guard/index';
import {UserComponent} from "./user/user.component";

const APP_ROUTES:Routes = [
    {
        path: '',
        component: HomepageComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: AuthenticationComponent
    },
    {
        path: 'post',
        component: PostComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'user',
        component: UserComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: ''
    }
]

export const Routing = RouterModule.forRoot(APP_ROUTES);