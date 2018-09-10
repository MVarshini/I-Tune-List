import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SongListComponent } from './components/song-list/song-list.component';
import { HttpModule } from '@angular/http';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    AppComponent,
    SongListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    LazyLoadImageModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
