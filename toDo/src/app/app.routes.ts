import { Routes } from '@angular/router';
import { DefaultComponent } from './shared/layout/default/default.component';
import { LoginComponent } from './pages/login/login.component';
import { MasterComponent } from './shared/layout/master/master.component';

import { TodoComponent } from './pages/todo/todo.component';
import { authGuard } from './core/gaurds/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: DefaultComponent,
        children: [{ path: '', component: LoginComponent }]
    },
    {
        path: '',
        component: MasterComponent,
        canActivate:[authGuard],
        children: [{ path: 'todo', component: TodoComponent }]
    }
];
