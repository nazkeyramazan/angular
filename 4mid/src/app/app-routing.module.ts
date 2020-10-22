import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { LoginComponent } from './login/login.component'
import { PostCreateComponent } from './post-create/post-create.component';
import { PostListComponent } from './post-list/post-list.component';
import { RegisterComponent } from './register/register.component'
import { UserListComponent } from './user-list/user-list.component';
import {PostFilterComponent} from './post-filter/post-filter.component'
import { CommentComponent } from './comment/comment.component';
const routes: Routes = [
  {path:'' , redirectTo: 'login' , pathMatch : 'full'},
  // {path:'' , redirectTo: 'register' , pathMatch : 'full'},

  {path: 'login' , component: LoginComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'post-list' , component: PostListComponent},
  {path: 'post-create' , component: PostCreateComponent},
  {path: 'albums-list' , component: AlbumsComponent},
  {path: 'user-list' , component: UserListComponent},
  {path: 'post-filter', component:PostFilterComponent},
  {path: 'comments', component: CommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
