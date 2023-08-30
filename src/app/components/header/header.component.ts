import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  pseudo = 'zorro';
  imgSrc = 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1097.jpg'
  
  test(){
    console.log("bouton cliqué")
  }
  monStyle = {
    color:'red',
    backgroundColor:'cyan'
  }

  user = {
    name:'toto',
    age:56,
    friends:['pedro', 'alfonso',  'coco']
  }
  userConnected = false;
  constructor(){
    setTimeout(()=>   {this.userConnected = true},3000)
  }
}
