import { AppRouter } from './config/app.router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { CityDetailPage } from './pages/city.detail/city.detail.component';
import { CitiesListPage } from './pages/cities.list/cities.list.component';

import { CitiesDetailService } from './pages/city.detail/city.detail.service';
import { CitiesListService } from './pages/cities.list/cities.list.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRouter,
        HttpModule,
    ],
    declarations: [
        AppComponent,
        CitiesListPage,
        CityDetailPage
    ],
    providers: [
        CitiesListService,
        CitiesDetailService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);