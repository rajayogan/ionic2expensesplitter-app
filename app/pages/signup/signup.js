import {Page, NavController, Alert} from 'ionic-angular';
import {AuthService} from '../../services/authservice';


@Page({
  templateUrl: 'build/pages/signup/signup.html',
    providers: [AuthService]
})
export class Signup {
    static get parameters() {
        return [[AuthService],[NavController]];
    }
    constructor(authservice, navcontroller) {
        this.newcreds = {
            name: '',
            password: ''
        }
        this.service = authservice;
        this.nav = navcontroller;
    }
    register(user) {
        this.service.adduser(user).then(data => {
            if(data) {
                var alert = Alert.create({
                    title: 'Success',
                    subTitle: 'User Created',
                    buttons: ['ok']
                });
                this.nav.present(alert);
            }
    });
}
}