import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RessourcesService } from 'src/app/services/ressources.service';

@Component({
  selector: 'app-visualiser-societe',
  templateUrl: './visualiser-societe.component.html',
  styleUrls: ['./visualiser-societe.component.css']
})
export class VisualiserSocieteComponent implements OnInit {

  societes: any;
  constructor(private router: Router,
    private ressourcesService: RessourcesService) { }

  ngOnInit(): void {
    this.getSocietes();
  }

  getSocietes(): void{
    this.ressourcesService.getRessource("/societes")
      .subscribe(response =>{
        if(response != null){
          this.societes = response;
        }else{
          alert("Veillez enregistrer d'abord les sociétes.");
        }
      },err=>{          
        alert("Erreur d'accès à la BD.");
        this.router.navigateByUrl("/pagenotfound");
    });
}

}
