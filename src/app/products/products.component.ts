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
      name: 'Bravus Shaving',
      price: 59.99,
      image: 'https://cdn.awsli.com.br/2500x2500/560/560895/produto/69376284/12e0a48f69.jpg',
    },
    {
      id: 2,
      name: 'Gel Shaving',
      price: 39.99,
      image: 'https://cdn.awsli.com.br/1090/1090324/produto/218195566/gel-de-barbear-jean-bryan-shaving-1kg-srltypem2m.png',
    },
    {
      id: 3,
      name: 'Creme Para Barbear',
      price: 70.99,
      image: 'https://cdn.awsli.com.br/288/288648/produto/35255926/5728c40584.jpg',
    },
    {
      id: 4,
      name: 'Citric Gel',
      price: 75.00,
      image: 'https://cdn.awsli.com.br/2500x2500/872/872466/produto/65972520/a861b87fc0.jpg',
    },
    {
      id: 5,
      name: 'Conjunto Eudora',
      price: 150.99,
      image: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/products/E2023020301/E2023020301_IMPRESSION_ESPUMA-BARBEAR_200ML_GEL-POS-BARBA_75G.jpg',
    },
    {
      id: 6,
      name: 'Conjunto Bozzano',
      price: 156.90,
      image: 'https://lojacoty.vteximg.com.br/arquivos/ids/173708-1000-1000/KITBARBA01_1.jpg?v=637613443871930000',
    },
  ];
}
