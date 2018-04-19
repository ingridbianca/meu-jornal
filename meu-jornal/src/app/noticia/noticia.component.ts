import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  //noticias: Array<string>; ou
  noticias: string[] = ["Noticia 1","Noticia 2","Noticia 3", "Noticia 4"];
  mostrarNoticia: boolean = true;
  titulo: string = 'Curso Angular';
  texto: string = 'Utilizando String Interpolation';
  caminho_imagem: string = '../../assets/princesa.png';
    
  constructor() { }

  ngOnInit() {
  }

  public esconderNoticia(){
    this.mostrarNoticia = !this.mostrarNoticia;
  }

}
