import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ErrorHandlingService } from '../../../services/error-handling/error-handling-service.service';

@Component({
  selector: 'app-erro-loading-micro',
  templateUrl: './erro-loading-micro.component.html',
  styleUrl: './erro-loading-micro.component.scss'
})
export class ErroLoadingMicroComponent {

  errorSubscription: Subscription | undefined;

  constructor(
    private router: Router,
    private errorHandlingService: ErrorHandlingService
  ) {}

  ngOnInit() {
    this.errorSubscription = this.errorHandlingService.error$.subscribe(
      (error:any) => {
        console.log(error);
        // Redirect to error route
        this.router.navigate(['/error']);
      }
    );
  }

  ngOnDestroy() {
    if (this.errorSubscription) {
      this.errorSubscription.unsubscribe();
    }
  }

  tryReload(){
    window.location.reload();
  }

}
