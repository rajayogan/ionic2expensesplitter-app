import {Page, NavController, Alert} from 'ionic-angular';
import {AuthService} from '../../services/authservice';
import {HomePage} from '../home/home';
import {ExpensePage} from '../expense/expense';
import {MoneyowedPage} from '../moneyowed/moneyowed';
import {MoneyduePage} from '../moneydue/moneydue';

@Page({
    templateUrl: 'build/pages/userpage/userpage.html',
    providers: [AuthService]
})

export class UserPage {
    static get parameters() {
        return [[AuthService],[NavController]];
    }
    constructor(authservice, navcontroller) {
        this.service = authservice;
        this.nav = navcontroller;
        
    }
    
    logout() {
        this.service.logout();
        this.nav.setRoot(HomePage);
    }
    
    getinfo() {
        this.service.getinfo().then(data => {
        if(data.success) {
            var alert = Alert.create({
                title: data.success,
                subTitle: data.msg,
                buttons: ['ok']
            });
            this.nav.present(alert);
        }
            
    })
                                    
}
    addnew() {
        this.nav.push(ExpensePage);
    }
    
    moneyowed() {
        this.nav.push(MoneyowedPage);
    }
    moneydue() {
        this.nav.push(MoneyduePage);
    }
}
