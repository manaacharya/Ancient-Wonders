import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListOfWondersComponent} from './list-of-wonders/list-of-wonders.component';
import { AppComponent } from './app.component';
import { PyramidsComponent } from './pyramids/pyramids.component';
import { GardensComponent } from './gardens/gardens.component';
import { ZeusComponent } from './zeus/zeus.component';
import { ArtemisComponent } from './artemis/artemis.component';
import { MausoleumComponent } from './mausoleum/mausoleum.component';
import { RhodesComponent } from './rhodes/rhodes.component';
import { AlexandriaComponent } from './alexandria/alexandria.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    PyramidsComponent,
    GardensComponent,
    ZeusComponent,
    ArtemisComponent,
    MausoleumComponent,
    RhodesComponent,
    AlexandriaComponent,
    ListOfWondersComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
