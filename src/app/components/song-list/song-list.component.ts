import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  private apiUrl = 'https://itunes.apple.com/in/rss/topalbums/limit=100/json';
  private data = {};
  private defaultImg = '/assets/images/picture.jpg';
  constructor(private http: Http, private spinner: NgxSpinnerService) {
    this.getItems();
  }
  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
  }, 2000);
  }
  getItems() {
    this.http.request(this.apiUrl)
    .subscribe(response =>
       this.data = JSON.parse(response.text()));
  }
}
