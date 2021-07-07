import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-computador-crud',
  templateUrl: './computador-crud.component.html',
  styleUrls: ['./computador-crud.component.css']
})
export class ComputadorCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToComputadorCreate():void{
    this.router.navigate(['/computador/cadastrar'])
  }
}
