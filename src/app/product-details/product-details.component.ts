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
      name: 'Iphone X',
      description: 'O iPhone X redefiniu os padrões de smartphones com seu design inovador, tela OLED Super Retina e tecnologia de reconhecimento facial Face ID. Equipado com o processador A11 Bionic, oferece desempenho ultrarrápido e eficiência energética. A câmera dupla de 12 MP com estabilização óptica permite capturar fotos e vídeos com qualidade profissional, enquanto o carregamento sem fio torna o uso mais conveniente.',
      price: 1999.99,
      image: 'assets/smartphone-x.png',
      additionalImages: ['assets/smartphone-x-front.png', 'assets/smartphone-x-back.png'],
    },
    {
      id: 2,
      name: 'airpods',
      description: ' Os AirPods oferecem uma experiência de áudio sem fio premium, combinando conforto, som de alta qualidade e integração perfeita com dispositivos Apple. Com tecnologia de cancelamento de ruído ativo e o modo ambiente, eles proporcionam uma experiência auditiva imersiva, seja para músicas, podcasts ou chamadas. O estojo de carregamento portátil garante até 24 horas de duração da bateria.',
      price: 299.99,
      image: 'assets/fone-bluetooth.png',
      additionalImages: ['assets/fone-case.png'],
    },
    {
      id: 3,
      name: 'Carregador Turbo',
      description: 'O Carregador Turbo proporciona carregamento ultrarrápido para seus dispositivos, permitindo recargas completas em menos tempo. Compatível com smartphones, tablets e outros gadgets, ele é ideal para quem precisa de eficiência e conveniência. Com proteção contra sobrecarga e superaquecimento, garante segurança durante o uso, sem comprometer a qualidade da carga.',
      price: 99.99,
      image: 'assets/carregador-turbo.png',
      additionalImages: ['assets/carregador-turbo-2.png'],
    },
    {
      id: 4,
      name: 'MacBokk',
      description: 'O MacBook combina design elegante e desempenho poderoso em um laptop compacto e leve. Equipado com o processador Apple M1, ele oferece velocidade impressionante, gráficos avançados e eficiência energética, tornando-o perfeito para profissionais, estudantes e criativos. Sua tela Retina proporciona imagens nítidas e vibrantes, enquanto a bateria de longa duração garante produtividade o dia todo.',
      price: 2000.00,
      image: 'assets/Mac-Bokk.png',
      additionalImages: ['assets/Mac-2.png'],
    },
    {
      id: 5,
      name: 'Televisão',
      description: 'Esta televisão de última geração oferece uma experiência de cinema em casa com qualidade de imagem em alta definição e som imersivo. Disponível em tamanhos de tela que variam de 40 a 75 polegadas, ela suporta resolução 4K e HDR10, oferecendo cores vibrantes e detalhes surpreendentes em cada cena. Ideal para filmes, séries e jogos, transforma qualquer sala em um verdadeiro centro de entretenimento.',
      price: 1700.99,
      image: 'assets/televisao.png',
      additionalImages: ['assets/televisao-2.png'],
    },
    {
      id: 6,
      name: 'pelicula de privacidade',
      description: 'A película de privacidade é ideal para proteger a tela do seu dispositivo enquanto mantém suas informações pessoais e confidenciais longe de olhares curiosos. Criada para bloquear a visão lateral, ela permite que apenas o usuário diretamente à frente da tela visualize o conteúdo. Fácil de aplicar e resistente a arranhões, é perfeita para quem utiliza dispositivos em locais públicos ou ambientes de trabalho.',
      price: 99.99,
      image: 'assets/pelicula-priv.png',
      additionalImages: ['assets/pelicula-priv-2.png'],
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find((p) => p.id === id);
  }
}
