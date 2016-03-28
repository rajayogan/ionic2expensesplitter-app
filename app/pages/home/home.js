import {Page, NavController} from 'ionic-angular';
import {AuthService} from '../../services/authservice';
import {UserPage} from '../userpage/userpage';
import {Signup} from '../signup/signup';



@Page({
  templateUrl: 'build/pages/home/home.html',
    providers: [AuthService]
})
export class HomePage {
    static get parameters() {
        return [[AuthService],[NavController]];
    }
    constructor(authservice, navcontroller) {
        this.usercreds = {
            name: '',
            password: ''
        }
        this.service = authservice;
        this.nav = navcontroller;
    }
    login(user) {
        this.service.authenticate(user).then(data => {
            if(data) {
                this.nav.setRoot(UserPage);
            }
    });
}
    signup() {
        this.nav.push(Signup);
    }
}