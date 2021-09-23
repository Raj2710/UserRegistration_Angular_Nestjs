import { SampleComponent } from './sample/sample.component';
import { ServerComponent } from './server/server.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'sample', component: ServerComponent },
  { path: 'registration', component: SampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
