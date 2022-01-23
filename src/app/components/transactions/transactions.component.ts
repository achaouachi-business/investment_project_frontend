import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from 'src/app/models/transaction';
import { RessourcesService } from 'src/app/services/ressources.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  public transaction: Transaction = new Transaction();
  actifError: boolean = false;
  societes: any; 
  societeSelected: any;
  choisir =0;
  successAjout=0;
  constructor(private router: Router,
    private ressourcesService: RessourcesService) { }

  ngOnInit(): void {
    this.getSocietes();
  }

  ajouter(): void{
    this.actifError = false;
    if(this.transaction.description == null || this.transaction.quantity == null ||
      this.transaction.unitPrice == null){
      this.actifError = true;
    }else{
      if(this.societeSelected == null){
        this.choisir =1;
      }else{
        this.transaction.societe = this.societeSelected;
        this.transaction.date = Date.now();
        this.ressourcesService.postRessource("/transaction/save", this.transaction)
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

  onChangeSociete($event: any){
    let id = $event.target.value;
    if($event.target.checked){
      for(let i =0; i<this.societes.length; i++){
        if(this.societes[i].id == id){
          this.societeSelected = this.societes[i];
          console.log(this.societeSelected);
          break;
        }
      }
    }else{
      this.societeSelected = null;
    }   
  }

}
