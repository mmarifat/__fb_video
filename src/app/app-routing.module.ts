import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchBoxComponent} from './components/search-box/search-box.component';

const routes: Routes = [
  {
    path: '',
    component: SearchBoxComponent,
    data: {
      title: 'FB Video Downloader',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
