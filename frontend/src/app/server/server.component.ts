import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId:number = 10;
  serverName:string = "Server 1";
  allowServer:boolean = true;
  value:any = "";
  constructor() {
    setTimeout(()=>{
      this.allowServer=false;
    },5000)
  }

  getServerName(){
    this.serverName="Server 2 and It is not working fine";
  }

  ngOnInit(): void {
  }

}
