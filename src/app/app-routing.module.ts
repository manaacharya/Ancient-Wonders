import { NgModule } from '@angular/core';
import { PyramidsComponent } from './pyramids/pyramids.component';
import { GardensComponent } from './gardens/gardens.component';
import { ZeusComponent } from './zeus/zeus.component';
import { ArtemisComponent } from './artemis/artemis.component';
import { MausoleumComponent } from './mausoleum/mausoleum.component';
import { RhodesComponent } from './rhodes/rhodes.component';
import { HomePageComponent} from './home-page/home-page.component';
import { AlexandriaComponent } from './alexandria/alexandria.component';
import { Routes, RouterModule } from '@angular/router';
import { ListOfWondersComponent } from './list-of-wonders/list-of-wonders.component';

const routes: Routes = [
  { path: 'alexandria', component: AlexandriaComponent},
  {path: 'artemis', component: ArtemisComponent},
  {path: 'gardens', component: GardensComponent},
  {path: 'mausoleum', component: MausoleumComponent},
  {path: 'pyramids', component: PyramidsComponent},
  {path: 'rhodes', component: RhodesComponent},
  {path: 'zeus', component: ZeusComponent},
  { path: '', component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
