import { Component, OnInit } from '@angular/core';
import { ComputadorService } from '../computador.service';
import { Router } from '@angular/router'
import { Computador } from '../computador.model';

@Component({
  selector: 'app-computador-create',
  templateUrl: './computador-create.component.html',
  styleUrls: ['./computador-create.component.css']
})
export class ComputadorCreateComponent implements OnInit {

  computador: Computador = {
    dono: '',
    placamae: '',
    processador: '',
    memoria: '',
    armazenamento: '',
    fonte: ''
  }

  constructor(private computadorService: ComputadorService, private router: Router) { }

  ngOnInit(): void {
  }

  createComputador():void{
    this.computadorService.create(this.computador).subscribe(()=>{
      this.computadorService.showMessage('Computador cadastrado com sucesso!')
      this.router.navigate(['/computador'])

    })

  }

  cancel():void{
    this.router.navigate(['/computador'])
  }
}
