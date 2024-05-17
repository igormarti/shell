import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './states/favorite-product/app.state';
import Product from './models/product.model';
import { add } from './states/favorite-product/action/app.action';
import { Observable } from 'rxjs';
import { selectProducts } from './states/favorite-product/selector/app.selector';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'shell';
  loadingRouteConfig: boolean | undefined;

  constructor(private readonly store:Store<AppState>, private router: Router) {  }
 
  favoritesProducts:Observable<Array<Product>> = this.store.pipe(select(selectProducts))

  async ngOnInit(): Promise<void> {

    this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart) {
          this.loadingRouteConfig = true;
      } else if (event instanceof RouteConfigLoadEnd) {
          this.loadingRouteConfig = false;
      }
    });

    const product:Product = {
      id:1,
      name: 'Desktop',
      price: '10.00',
      description: "Desktop description"
    }
    this.store.dispatch(add({product}));
    
  }



}
