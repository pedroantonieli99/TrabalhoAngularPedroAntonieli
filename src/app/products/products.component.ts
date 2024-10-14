import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Smartphone X',
      price: 1999.99,
      image: 'assets/smartphone-x.png',
    },
    {
      id: 2,
      name: 'Fone Bluetooth',
      price: 299.99,
      image: 'assets/fone-bluetooth.png',
    },
    {
      id: 3,
      name: 'Carregador Turbo',
      price: 99.99,
      image: 'assets/carregador-turbo.png',
    },
    {
      id: 4,
      name: 'MacBokk',
      price: 2000.00,
      image: 'assets/Mac-Bokk.png',
    },
    {
      id: 5,
      name: 'Televisão',
      price: 1700.99,
      image: 'assets/televisao.png',
    },
    {
      id: 6,
      name: 'pelicula de privacidade',
      price: 99.99,
      image: 'assets/pelicula-priv.png',
    },
  ];
}
