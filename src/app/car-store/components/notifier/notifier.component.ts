import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NotifierService } from '../../services/notifier.service';

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.scss'],
})
export class NotifierComponent implements OnInit {
  constructor(private toast: NotifierService) {}

  ngOnInit(): void {}

  showSucess() {
    this.toast.showSucess('Toast added succesfuly', 'Toast Tutorial');
  }

  showError() {
    this.toast.showError('Toast error testing', 'Toast Tutorial');
  }

  showWarning() {
    this.toast.showWarning('Toast warning testing', 'Toast Tutorial');
  }

  showInfo() {
    this.toast.showInfo('Toast info testing', 'Toast Tutorial');
  }
}
