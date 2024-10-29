import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  products = [
    {
      id: 1,
      name: 'Bravus Shaving',
      description: 'Experimente o Bravus Shaving, uma espuma premium para barbear que proporciona um deslizamento suave e preciso da lâmina. Com uma fórmula enriquecida que hidrata a pele, reduz irritações e proporciona uma sensação refrescante, ele é ideal para um barbear confortável e completo.',
      price:59.99,
      image: 'https://cdn.awsli.com.br/2500x2500/560/560895/produto/69376284/12e0a48f69.jpg',
      additionalImages: ['https://cdn.awsli.com.br/2500x2500/560/560895/produto/69376284/12e0a48f69.jpg'],
    },
    {
      id: 2,
      name: 'Gel Shaving',
      description: 'O Gel Shaving é perfeito para um barbear prático e eficaz. Sua textura em gel facilita a aplicação e permite um controle total sobre o corte, minimizando cortes e proporcionando uma pele macia e sem irritações.',
      price: 39.99,
      image: 'https://cdn.awsli.com.br/1090/1090324/produto/218195566/gel-de-barbear-jean-bryan-shaving-1kg-srltypem2m.png',
      additionalImages: ['https://cdn.awsli.com.br/1090/1090324/produto/218195566/gel-de-barbear-jean-bryan-shaving-1kg-srltypem2m.png'],
    },
    {
      id: 3,
      name: 'Creme para Barbear',
      description: 'O Creme para Barbear é indicado para quem busca um barbear tradicional e cuidadoso. Com uma fórmula rica em agentes emolientes, ele facilita o deslizamento da lâmina enquanto hidrata e protege a pele, proporcionando um barbear sem irritação.',
      price: 70.99,
      image: 'https://cdn.awsli.com.br/288/288648/produto/35255926/5728c40584.jpg',
      additionalImages: ['https://cdn.awsli.com.br/288/288648/produto/35255926/5728c40584.jpg'],
    },
    {
      id: 4,
      name: 'Citric Gel',
      description: 'Citric Gel é um gel de barbear refrescante que combina eficiência com um aroma cítrico revigorante. Perfeito para quem gosta de frescor, ele oferece uma aplicação leve e um corte suave, garantindo uma pele com sensação de limpeza e energia.',
      price: 75.00,
      image: 'https://cdn.awsli.com.br/2500x2500/872/872466/produto/65972520/a861b87fc0.jpg',
      additionalImages: ['https://cdn.awsli.com.br/2500x2500/872/872466/produto/65972520/a861b87fc0.jpg'],
    },
    {
      id: 5,
      name: 'Conjunto Eudora',
      description: 'O Conjunto Eudora para barbear é composto por produtos que cuidam da pele antes, durante e após o barbear. Com propriedades calmantes e hidratantes, este conjunto proporciona uma experiência de barbear completa e sofisticada, ideal para quem valoriza o cuidado pessoal.',
      price: 150.99,
      image: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/products/E2023020301/E2023020301_IMPRESSION_ESPUMA-BARBEAR_200ML_GEL-POS-BARBA_75G.jpg',
      additionalImages: ['https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/products/E2023020301/E2023020301_IMPRESSION_ESPUMA-BARBEAR_200ML_GEL-POS-BARBA_75G.jpg'],
    },
    {
      id: 6,
      name: 'Conjunto Bozzano',
      description: 'O Conjunto Bozzano oferece o essencial para um barbear prático e confortável. Com produtos de alta qualidade que promovem uma pele suave e livre de irritações, ele é perfeito para o uso diário, com uma performance que garante um acabamento impecável.',
      price: 156.90,
      image: 'https://lojacoty.vteximg.com.br/arquivos/ids/173708-1000-1000/KITBARBA01_1.jpg?v=637613443871930000',
      additionalImages: ['https://lojacoty.vteximg.com.br/arquivos/ids/173708-1000-1000/KITBARBA01_1.jpg?v=637613443871930000'],
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find((p) => p.id === id);
  }
}
