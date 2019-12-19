import {RouterModule, Routes} from '@angular/router';
import {NewHumanComponent} from './new-human/new-human.component';
import {NgModule} from '@angular/core';
import {ListHumanComponent} from './list-human/list-human.component';

const routes: Routes = [
  {
    path: '',
    component: ListHumanComponent
  },
  {
    path: 'newHuman',
    component: NewHumanComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {
}
