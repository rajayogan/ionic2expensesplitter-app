import {Injectable, Inject} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

@Injectable()
export class ExpenseService {
    static get parameters() {
        return [Http];
    }
    
    constructor(http) {
        this.http = http;
    }
    
    getUsers() {
        
    return new Promise(resolve => {
            var headers = new Headers();
            headers.append('Authorization', 'Bearer ' +window.localStorage.getItem('raja'));
            this.http.get('http://localhost:3333/getusers', {headers: headers}).subscribe(data => {
                if(data.json().success)
                    resolve(data.json());
                else
                    resolve(false);
            });
        })
    }
    
    savedata (newdata) {
        var todata = "name=" + newdata.name + "&expense=" + newdata.expense + "&details=" +JSON.stringify(newdata.details); 
        console.log(todata);
        return new Promise(resolve => {
            var headers = new Headers();
            headers.append('Authorization', 'Bearer ' +window.localStorage.getItem('raja'));
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            this.http.post('http://localhost:3333/saveexpense', todata, {headers: headers}).subscribe(data => {
                if(data.json().success)
                    resolve(data.json());
                else
                    resolve(data);
            });
        })
    }
    
    getamtinfo() {
        return new Promise(resolve => {
        var headers = new Headers();
            headers.append('Authorization', 'Bearer ' +window.localStorage.getItem('raja'));
            this.http.get('http://localhost:3333/getamtinfo', {headers: headers}).subscribe(data => {
                if(data.json().success)
                    resolve(data.json());
                else
                    resolve(false);
            });
        })
    }
    
     getdueinfo() {
        return new Promise(resolve => {
        var headers = new Headers();
            headers.append('Authorization', 'Bearer ' +window.localStorage.getItem('raja'));
            this.http.get('http://localhost:3333/getdueinfo', {headers: headers}).subscribe(data => {
                if(data.json().success)
                    resolve(data.json());
                else
                    resolve(false);
            });
        })
    }
}