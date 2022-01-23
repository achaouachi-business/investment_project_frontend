import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  ajouter =0;
  consulter=0;
  constructor() { }

  ngOnInit(): void {
  }
  public ajoute(codeOpp: number){
    this.ajouter = codeOpp;
    this.consulter=0
  }
  public consulte(codeOpp: number){
    this.consulter = codeOpp;
    this.ajouter=0
  }
}
