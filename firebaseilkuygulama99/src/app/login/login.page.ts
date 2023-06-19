import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { FireService } from '../fire.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userData : User = new User();
  alertController: any;
 

  constructor(privatealertController:AlertController,private router:Router,private fireService:FireService) { }

  ngOnInit(){

  }

  async giris(){  
  this.userData.email = 'deneme@deneme.com';
this.userData.password = "deneme";
const res = await this.fireService.epostaParolaGirisYap(this.userData);
console.log(res);



  }
  async kayit(){
    this.userData.email = 'deneme@deneme.com';
this.userData.password = "deneme";
const res = await this.fireService.epostaParolaKayitOl(this.userData);
if(res)
console.log(res);
else
this.presentAlert(res);




  }
  async presentAlert(mesaj) {
    const alert = await this.alertController.create({
      header: 'Hata',
      
      message: mesaj,
      buttons: ['Tamam'],
    });

    await alert.present();
  }
}
