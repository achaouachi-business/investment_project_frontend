import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RessourcesService } from 'src/app/services/ressources.service';

@Component({
  selector: 'app-visualiser-transactions',
  templateUrl: './visualiser-transactions.component.html',
  styleUrls: ['./visualiser-transactions.component.css']
})
export class VisualiserTransactionsComponent implements OnInit {
  transactions: any;
  constructor(private router: Router,
    private ressourcesService: RessourcesService) { }

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(): void{
    this.ressourcesService.getRessource("/transactions")
      .subscribe(response =>{
        if(response != null){
          this.transactions = response;
        }else{
          alert("Veillez enregistrer d'abord les sociétes.");
        }
      },err=>{          
        alert("Erreur d'accès à la BD.");
        this.router.navigateByUrl("/pagenotfound");
    });
  }
}
