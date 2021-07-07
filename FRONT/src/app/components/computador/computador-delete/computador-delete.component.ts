import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Computador } from '../computador.model';
import { ComputadorService } from '../computador.service';

@Component({
  selector: 'app-computador-delete',
  templateUrl: './computador-delete.component.html',
  styleUrls: ['./computador-delete.component.css']
})
export class ComputadorDeleteComponent implements OnInit {

  computador!: Computador

  constructor(private computadorService: ComputadorService, private router: Router, private msg: MatSnackBar, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  deleteComputador(): void {
    this.computadorService.delete(this.computador.dono).subscribe(() => {
      this.computadorService.showMessage("Computador excluido com sucesso!");
      this.router.navigate(["/products"]);
    });
  }

  cancel():void{
    this.router.navigate(['/computador'])
  
  }
}
