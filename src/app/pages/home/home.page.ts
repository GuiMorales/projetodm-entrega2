import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public atividades = [];
  constructor(
    private data: DataService,
  ) { }

  ngOnInit() {
    this.atividades = this.data.getAtividades();
  }

}
