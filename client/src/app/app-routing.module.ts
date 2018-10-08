import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './gallery/login/login.component';
import {GalleryComponent} from './gallery/gallery/gallery.component';
import {BrowserComponent} from './gallery/browser/browser.component';
import {GroupsComponent} from './gallery/groups/groups.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: GalleryComponent,
    children: [
      { path: 'gallery/:id', component: BrowserComponent },
      { path: 'gallery', component: BrowserComponent },
      { path: 'groups', component: GroupsComponent },
      { path: '', redirectTo: 'gallery', pathMatch: 'full' }
    ]
  },
];

@NgModule({
            exports: [ RouterModule ],
            imports: [ RouterModule.forRoot(routes, {useHash: true}) ]
          })
export class AppRoutingModule {

}
