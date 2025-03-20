import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotifierService {
  constructor(private toast: ToastrService) {}

  showSucess(title: string, message: string) {
    this.toast.success(message, title, {
      easing: 'ease-in',
      easeTime: 1000,
    });
  }

  showError(title: string, message: string) {
    this.toast.error(message, title);
  }

  showWarning(title: string, message: string) {
    this.toast.warning(message, title);
  }

  showInfo(title: string, message: string) {
    this.toast.info(message, title);
  }
}
