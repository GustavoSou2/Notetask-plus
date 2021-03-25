import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 import { MainScreenComponent } from './views/main-screen/main-screen.component';


const APP_ROUTES: Routes = [
    {
        path: '',
        component: MainScreenComponent
    },
    {
        path: 'home',
        component: MainScreenComponent
    }

];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);