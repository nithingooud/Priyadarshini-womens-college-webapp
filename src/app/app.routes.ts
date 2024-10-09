import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutPriyadarshiniComponent } from '../components/AboutUs/about-priyadarshini/about-priyadarshini.component';
import { MainLayoutComponent } from '../components/main-layout/main-layout.component';
import { HomeComponent } from '../components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'about',
                component: AboutPriyadarshiniComponent
            }
        ]
    },

];
