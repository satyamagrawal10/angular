import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {path: 'home' , component: HomePageComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'achievements' , component: AchievementsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomePageComponent, AboutComponent, AchievementsComponent]
