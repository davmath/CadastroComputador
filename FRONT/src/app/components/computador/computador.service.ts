import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Computador } from './computador.model';

@Injectable({
  providedIn: 'root'
})
export class ComputadorService {
  
  baseUrl = "http://localhost:3000/computador"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }


  showMessage(msg: string): void{
    this.snackBar.open(msg,'OK', {
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(computador:Computador): Observable<Computador>{
    return this.http.post<Computador>(`${this.baseUrl}/cadastrar`, computador)
  }

  read():Observable<Computador[]>{
    return this.http.get<Computador[]>(`${this.baseUrl}/listar`)
  }

  delete(dono: string): Observable<Computador> {
    return this.http.delete<Computador>(`${this.baseUrl}/remover/${dono}` );
  }
}
