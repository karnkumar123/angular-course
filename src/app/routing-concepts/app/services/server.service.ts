import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor() { }
  servers: {id: number, name:string}[] = [
    {id: 1, name: 'server1'},
    {id: 2, name: 'server2'},
    {id: 3, name: 'server3'}
  ]

  getServers(){
    return this.servers;
  }

  getServer(id: number): {id: number, name: string}{
    let server = this.servers.find(element => element.id === id);
    if(server != undefined){
      return server;
    }else{
      throw new Error('Server Not Found');
    }
  }

  saveServer(id: number, name: string){
    this.servers.forEach((server, index)=>{
      if(server.id === id){
        this.servers[index].name = name;
      }
    })
  }
}
