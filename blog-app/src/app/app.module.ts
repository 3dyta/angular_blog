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
import { ContactMeComponent } from './sidenav/contact-me/contact-me.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare, faTwitterSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebookSquare, faTwitterSquare, faInstagram)

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ContactMeComponent,
  ],
  imports: [
    BrowserModule,
    PostsModule,
    RouterModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatListModule,
    MatDatepickerModule,
    FontAwesomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
