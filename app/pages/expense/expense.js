import {Page, NavController, Alert} from 'ionic-angular';
import {ExpenseService} from '../../services/expense';
import {UserPage} from '../userpage/userpage';

/*
  Generated class for the ExpensePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/expense/expense.html',
    providers: [ExpenseService]
})
export class ExpensePage {
  static get parameters() {
    return [[NavController], [ExpenseService]];
  }

  constructor(nav, service) {
    this.nav = nav;
      this.service = service;
      this.expense = {
          name: '',
          users: {
              name: [],
              share: ''
          },
          amount: ''
      };
      
    this.service.getUsers().then((data)=> {
        this.allusers = data.data;
        
      
      })

}
    
saveExpense(newdata){
    var usersinvolved = newdata.users.name.length + 1;
    var splitshare = newdata.amount / usersinvolved;
    var datareformat = {
        name: newdata.name,
        expense: newdata.amount,
        details: {
            name: newdata.users.name,
            share: splitshare
        }
    }
    this.service.savedata(datareformat).then((res) => {
        var alert = Alert.create({
            title: 'Done',
            subTitle: 'Saved Successfully',
            buttons: ['Ok']
        });
        this.nav.present(alert);
        setTimeout(()=>{
        this.nav.push(UserPage);    
        },3000);
        
    })
    
}
    
}
