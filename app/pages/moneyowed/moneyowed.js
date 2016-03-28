import {Page, NavController, Alert} from 'ionic-angular';
import {ExpenseService} from '../../services/expense';



/*
  Generated class for the MoneyowedPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/moneyowed/moneyowed.html',
    providers: [ExpenseService]
})
export class MoneyowedPage {
  static get parameters() {
    return [[NavController],[ExpenseService]];
  }
 constructor(nav, service) {
    this.nav = nav;
     this.service = service;
     this.refineddata =[];
   
     
  }
    onPageWillEnter() {
    this.service.getamtinfo().then((res) => {
        if(res.data.length != 0){
        this.initdata = res.data;  
        this.initdata.forEach((entry) => {
          if(entry.amount != 0)
              this.refineddata.push(entry);
              console.log(this.refineddata);
      })
        }
        
        else {    
            this.refineddata = [{
                amount: 'Nothing',
                owedto: 'Nobody'
            }];
            
        }
    
    })
     }
    
}
