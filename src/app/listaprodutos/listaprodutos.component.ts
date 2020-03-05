import { Component, OnInit } from '@angular/core';

import { products } from '../products';
@Component({
  selector: 'app-listaprodutos',
  templateUrl: './listaprodutos.component.html',
  styleUrls: ['./listaprodutos.component.css']
})
export class ListaprodutosComponent implements OnInit {
  products = products; // ???
  constructor() { }

  ngOnInit() {
  }

  share() {
    window.alert('O produto foi compartilhado!');
  }

}
