import { Component, Input, OnInit, } from '@angular/core';
import { ModalController,ToastController } from '@ionic/angular';
import { FireService,urunBilgi } from '../fire.service';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() id:string | undefined;
  urun!: urunBilgi;
  toastController: any;

  constructor(private ToastController:ToastController,private FireService:FireService,private ModalController:ModalController) { }
   

  ngOnInit() {
    this.FireService.urungetir(this.id).subscribe(sonuc=> {this.urun=sonuc}, hata=>{console.log(hata);})
  
   
  }
  kapat()
  {

    this.ModalController.dismiss();
  }
  async guncelle(){
    this.FireService.urunGuncelle(this.urun);
    const toast = await this.toastController.create({
      message: 'Urun Guncellendi.',
      duration: 2008
      });
      toast.present();
      this.ModalController.dismiss();

  }
  
  sil()
  {
    this.FireService.urunSil(this.urun.id);


  }


}
