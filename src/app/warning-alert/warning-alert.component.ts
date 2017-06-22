import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styles: [
    `
      p {
        background-color: mistyrose;
        border: solid 1px red;
        padding: 20px;
      }
    `
  ]
})
export class WarningAlertComponent {
}
