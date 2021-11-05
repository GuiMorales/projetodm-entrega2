import { Injectable } from '@angular/core';

//Interface de notas e eventos
export interface IAtividades{
  id: number,
  name: string,
  image: string,
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getAtividades() {
    let atividades = [];

    let atv1: IAtividades = {
      id: 1,
      name: 'Notas',
      image: '../../assets/images/note.png'
    }

    let atv2: IAtividades = {
      id: 2,
      name: 'Eventos',
      image: '../../assets/images/event.png'
    }

    atividades.push(atv1, atv2);

    return atividades;
  }
}