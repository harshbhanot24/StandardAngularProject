import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
products=[{
id: 1,
name: 'Shoes',
desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat`
,price: 3400,
rating: 4 
}, {
  id: 8,
  name: 'Clothes',
  desc: `Lorem ipsum dolor sit amet, consectetur adipisci`,
  price: 3400,
  rating: 4 
},
{
  id: 2,
  name: 'Books',
  desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat`
 ,price: 3400,
  rating: 4 
}
, {
  id: 3,
  name: 'Mobile',
  desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat`
,price: 3400,
  rating: 4 
}
, {
  id: 4,
  name: 'Pens',
  desc: `Loremut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat`
,price: 3400,
  rating: 4 
}, {
  id: 5,
  name: 'Bag',
  desc: `Lorem ipsum dolor sit amet, consectetur adipnt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat`
,price: 3400,
  rating: 4 
}


]
  constructor() { }

  ngOnInit() {
  }

}
