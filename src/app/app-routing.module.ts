import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import { ViewPageComponent } from './view-page/view-page.component';
import { TaskEditorComponent } from './task-editor/task-editor.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path : '', component: HomePageComponent},
  {path : 'viewPage', component: ViewPageComponent},
  {path : 'editPage', component: TaskEditorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterOutlet],
  exports: [RouterModule]
})
export class AppRoutingModule { }
