import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { favoriteReducer } from './states/favorite-product/reducer/app.reducer';
import { ProductsSuggestedComponent } from "./components/remote/products-suggested/products-suggested.component";
import { HeaderComponent } from './components/local/header/header.component';
import { ErrorModule } from './error/error.module';
import { LoadingComponent } from './components/local/loading/loading.component';
import { HttpClientModule } from '@angular/common/http';
import {MatBadgeModule} from '@angular/material/badge'; 
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LoadingComponent,
    ],
    providers: [
    ],
    bootstrap: [AppComponent],
    imports: [
        MatBadgeModule,
        MatIconModule,
        BrowserModule,
        AppRoutingModule,
        ErrorModule,
        StoreModule.forRoot({ favorite: favoriteReducer }),
        ProductsSuggestedComponent,
        HttpClientModule,
   ]
})
export class AppModule { }
