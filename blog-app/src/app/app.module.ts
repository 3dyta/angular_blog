import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PostsModule } from './posts/posts.module';
import { TitleComponent } from './title/title.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list'
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
  ],
  imports: [
    BrowserModule,
    PostsModule,
    RouterModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatListModule,
    MatDatepickerModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
