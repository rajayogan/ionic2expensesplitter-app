import {Page, NavController} from 'ionic-angular';
import {ExpenseService} from '../../services/expense';

/*
  Generated class for the MoneyduePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/moneydue/moneydue.html',
    providers: [ExpenseService]
})
export class MoneyduePage {
  static get parameters() {
    return [[NavController],[ExpenseService]];
  }

  constructor(nav, service) {
    this.nav = nav;
      this.service = service;
      this.refineddata = [];
      this.service.getdueinfo().then((res) => {
          this.duedata = res.data;
          this.duedata.forEach((entry) => {
          if(entry.amount != 0)
              this.refineddata.push(entry);
              console.log(this.refineddata);
      })
      })
      
      
      this.spliceddata = {
          name: [],
          share: ''
      };
  }
    paid(item) {
        
        for(var i=0; i < this.refineddata.length; i++) {
            if(this.refineddata[i].owedby == item.owedby) {
                this.spliceddata.name.push(item.owedby);
                this.spliceddata.share = item.amount;
                var newcall = {
                    name: 'Paid',
                    expense: 0,
                    details: {
                        name: this.spliceddata.name,
                        share: this.spliceddata.share
                    }
                }
                this.service.savedata(newcall).then((res) => {
                    console.log(res);
                   
                })
                
                this.refineddata.splice(i, 1); 
            }
                
        }
    }
}
