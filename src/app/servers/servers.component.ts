import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  isAllowNewServer = false;
  serverStatus = 'No server';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.isAllowNewServer = true;
    }, 2000);
  }

  onUpdateServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onServerAdded() {
    this.serverStatus = 'Server was added'
  }
}
