import { loadRemoteModule } from '@angular-architects/module-federation';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Injector, OnInit } from '@angular/core';
import { createCustomElement } from '@angular/elements';

@Component({
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Adicione aqui
  selector: 'app-products-suggested',
  templateUrl: './products-suggested.component.html',
  styleUrl: './products-suggested.component.scss'
})
export class ProductsSuggestedComponent implements OnInit {

  constructor(private injector : Injector) {
    this.loadMicroFrontend();
  }

  ngOnInit(): void{
    this.loadMicroFrontend();
  }
  
  loadMicroFrontend(){
    loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: './ProductsSuggestedComponent',
    }).then((MicroModule : any) => {
      const ce = createCustomElement(
        MicroModule.ProductsSuggestedComponent, {
          injector: this.injector
        }
      );

      if (!customElements.get('mfe-products-suggested')) {
        customElements.define('mfe-products-suggested', ce);
      }
          
    }).catch((err:any) => console.log(err));
   }

}
