import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {loadRemoteModule} from '@angular-architects/module-federation';
import { ErrorHandlingService } from './services/error-handling/error-handling-service.service';
import { ErrorModule } from './error/error.module';
import { LoadingComponent } from './components/local/loading/loading.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path:'products', 
    loadChildren:() => 
        loadRemoteModule({
          type: 'module',
          remoteEntry: 'http://localhost:4201/remoteEntry.js',
          exposedModule: './ProductsModule'
        })
        .then((m) => m.ProductsModule)
        .catch((err: any) => {
          console.error('Error loading remote module:', err);
          return ErrorModule;
        })
  },
  {
    path: '**',
    component: LoadingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
