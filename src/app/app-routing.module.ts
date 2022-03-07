import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './results/results.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path:"results",component:ResultsComponent},
  {path:"skills",component:SkillsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
