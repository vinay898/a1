import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  films: Observable<any>;
  public WalletBalance: string="";
  constructor(public httpClient: HttpClient) {
    this.films = this.httpClient.get('http://localhost/db.php'); //https://swapi.co/api/films
    this.films
    .subscribe(data => {
      
      this.WalletBalance = data[1].amount;
      console.log('my data: ', JSON.stringify(data));
  })

}
}