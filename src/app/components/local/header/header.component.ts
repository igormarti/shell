import { Component, OnInit } from '@angular/core';
import PubSub from 'pubsub-js'
import ProductCount from '../../../models/product-count.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  productsCartCount:number = 0;
  productsFavoriteCount:number = 0;

  ngOnInit(): void {
    this.listenerMessagesProductsApp();
  }

  listenerMessagesProductsApp(){
    PubSub.subscribe('product_interested', (__msg:string, data:ProductCount) => {
       switch(data.topic){
          case 'cart':
            this.productsCartCount = data.count;
            break;
          case 'favorities':
            this.productsFavoriteCount = data.count;
       }
    })
  }

}
