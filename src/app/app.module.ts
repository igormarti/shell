import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { favoriteReducer } from './states/favorite-product/reducer/app.reducer';
import { ProductsSuggestedComponent } from "./remotes-components/products-suggested/products-suggested.component";

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot({ favorite: favoriteReducer }),
        ProductsSuggestedComponent
    ]
})
export class AppModule { }
