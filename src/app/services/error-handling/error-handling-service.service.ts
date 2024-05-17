import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  private errorSubject = new Subject<string>();
  error$ = this.errorSubject.asObservable();

  handleError(error: string) {
    alert("AQUI HANDLE ERROR")
    this.errorSubject.next(error);
  }
}
