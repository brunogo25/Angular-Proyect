import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassI } from 'src/app/models/class.interfaces';
import { ClassService } from 'src/app/shared/services/class.service';
@Component({
  selector: 'app-clase',
  templateUrl: './hack-clase.component.html',
  styleUrls: ['./hack-clase.component.scss']
})
export class HackClaseComponent implements OnInit{
  id!: any
  clase!: ClassI
  constructor(public classApi: ClassService, private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id= params.get('id')
    })
    this.classApi.getClassByID(this.id).subscribe((data: any)=>{
      this.clase = {...data}
    })
  }
  editar(){
    this.classApi.setClass(this.clase, this.id);
    this.router.navigate(["/editar"]);
  }
  borrar(){
    this.classApi.deleteClass(this.id).subscribe((data)=>{
      console.log("borrado", data)
      this.router.navigate(["/clases"])
    })
  }
}
