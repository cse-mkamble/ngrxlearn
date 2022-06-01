import { PostComponent } from './containers/post/post.component';
import { UserComponent } from './containers/user/user.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', component: UserComponent },
      { path: 'post', component: PostComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
