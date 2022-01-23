import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Societe } from '../models/societe';
import { RessourcesService } from '../services/ressources.service';

@Component({
  selector: 'app-societes',
  templateUrl: './societes.component.html',
  styleUrls: ['./societes.component.css']
})
export class SocietesComponent implements OnInit {

  public societe: Societe = new Societe();
  actifError: boolean = false;
  successAjout=0;
  constructor(private router: Router,
    private ressourcesService: RessourcesService) { }

  ngOnInit(): void {
  }

  ajouter(): void{
    this.actifError = false;
    if(this.societe.name == null || this.societe.actionPrice == null){
      this.actifError = true;
    }else{
        this.ressourcesService.postRessource("/societe/save", this.societe)
          .subscribe(response =>{
            if(response != null){
              this.successAjout = 1;
            }else{
              alert("Erreur d'enregistrement.");
            }
          },err=>{          
            this.router.navigateByUrl("/pagenotfound");
        }
        );
      
    }
  }

}
