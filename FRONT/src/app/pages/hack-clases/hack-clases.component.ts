import { Component, OnInit } from '@angular/core';
import { ClassI } from 'src/app/models/class.interfaces';
import { ClassService } from 'src/app/shared/services/class.service';

@Component({
  selector: 'app-clases',
  templateUrl: './hack-clases.component.html',
  styleUrls: ['./hack-clases.component.scss']
})
export class HackClasesComponent implements OnInit {
  listado!: ClassI[];

  constructor(public classApi: ClassService ){}

  ngOnInit(): void {
    this.classApi.getClases().subscribe((data: any) => {
      this.listado = [...data]
    })
  }
}
