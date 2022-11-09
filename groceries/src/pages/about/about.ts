import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  stores = []; /*store list*/
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public toastCtrl: ToastController) {}
  
  addStore() {
    console.log("adding item");
    this.showAddItemPrompt();
  }
    /*for the prompt alert*/
    showAddItemPrompt() {
      const prompt = this.alertCtrl.create({
        title: 'Add Store',
        message: "Add the name of a grocery store...",
        inputs: [
          {
            name: 'name',
            placeholder: 'Name'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Save',
            handler: store => {
              console.log('Saved clicked', store); 
              this.stores.push(store);   /*add to list of items*/
            }
          }
        ]
      });
      prompt.present();
    }
    
    removeStore(store, index){
      console.log("Removing Store-", store, index);
    
      const toast = this.toastCtrl.create({
        message: 'Removing ' + store.name + ' from Favorite Stores list.',
        duration: 3000
      });
      toast.present();
      this.stores.splice(index, 1);  /*remove items from a list*/
    }

}
