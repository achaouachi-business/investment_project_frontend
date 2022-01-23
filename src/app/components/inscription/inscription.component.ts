import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { RessourcesService } from 'src/app/services/ressources.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  
  user: User = new User();
  actifError: boolean = false;
  emailFormat: boolean = true;
  public repeatPassword: string = '';

  constructor(private router: Router,
    private authentificationService: AuthentificationService,
    private ressourcesService: RessourcesService) { }
  ngOnInit(): void {
  }
  public enregistrerCompteEtAllerAAcceuil(): void{
    this.actifError = false;
    let regexp = new RegExp('[a-z0-9._%+-]{1,}@[a-z0-9.-]{2,}[.][a-z]{2,}');
    this.emailFormat = regexp.test(this.user.email);
    if(
      this.user.nom == null ||
      this.user.prenom == null ||
      this.user.matricule == null ||
      this.user.adresse == null ||
      this.user.email == null ||
      this.user.specialite == null ||
      this.user.telephone == null ||
      this.user.password == null ||
      this.user.password != this.repeatPassword ||
      this.emailFormat== false
    ){
      this.actifError = true;
    }else{
      //connecte to DB to store and generete jwt token for user and redirect user to acceuil(home) page
      this.ressourcesService.postUser("/user/save", this.user)
        .subscribe(response =>{
          if(response != null){
            this.authentificationService.onLogin(this.user)
              .subscribe(jwtToken =>{
                if(jwtToken != null){
                  let token = jwtToken.headers.get("Authorization");
                  this.authentificationService.saveTokenLocalStorage(token);
                  this.router.navigateByUrl("/acceuil");
                }
              },err=>{
                this.router.navigateByUrl("/pagenotfound");
            });
          }else{            
            this.router.navigateByUrl("/pagenotfound");
          }
        },err=>{          
          this.router.navigateByUrl("/pagenotfound");
      });

    }
  }
}
