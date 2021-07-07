import { Component, OnInit } from '@angular/core';
import { Computador } from '../computador.model';
import { ComputadorService } from '../computador.service';

@Component({
  selector: 'app-computador-read',
  templateUrl: './computador-read.component.html',
  styleUrls: ['./computador-read.component.css']
})
export class ComputadorReadComponent implements OnInit {

  computadores!: Computador[];
  displayedColumns = ['dono', 'placamae', 'processador', 'memoria', 'armazenamento', 'fonte', 'action']

  constructor(private computadorService: ComputadorService) { }

  ngOnInit(): void {
    this.computadorService.read().subscribe(computadores=>{
      this.computadores = computadores
      console.log(computadores)
    })
  }

}
