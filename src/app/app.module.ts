import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { SiblingComponent } from './components/sibling/sibling.component';
import { AnotherComponent } from './components/another/another.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { SharedService } from './services/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    SiblingComponent,
    AnotherComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
