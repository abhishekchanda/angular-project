import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer : boolean = false;
  serverCreationStatus : string = "No server is created.";
  serverName : string = "Server 1";
  serverCreated : boolean = false;
  servers : string[] = ['dev', 'qa', 'stage', 'prod'];

  constructor() {
      setTimeout(() => {
        this.allowNewServer = true
      }, 2000);
   }

  ngOnInit() {

  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created. The server name is " + this.serverName;
  }
}
