import { NavbarComponent } from './navbar/navbar.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { GitFollowersService } from './git-followers/services/git-followers.service';
import { AppErrorHandler } from './common/app-error-handler';
import { SummaryPipe } from './summary.pipe';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';
import { AuthorComponent } from './author/author.component';
import { AuthorService } from './author.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { IconComponent } from './icon/icon.component';
import { PostComponent } from './post/post.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { TodoComponent } from './todo/todo.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './post/service/post.service';
import { GitFollowersComponent } from './git-followers/git-followers.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCasePipe,
    SvgIconComponent,
    IconComponent,
    PostComponent,
    BootstrapPanelComponent,
    LikeComponent,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    TodoComponent,
    PasswordResetComponent,
    GitFollowersComponent,
    HomeComponent,
    NavbarComponent,
    GithubProfileComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', 
        component: HomeComponent
      },
      {
        path: 'posts', 
        component: PostComponent
      },
      {
        path: 'followers/:id/:username', 
        component: GithubProfileComponent
      },
      {
        path: 'followers', 
        component: GitFollowersComponent
      },
      {
        path: '**', 
        component: NotFoundComponent
      }
    ])
  ],
  providers: [
    CoursesService,
    AuthorService,
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    GitFollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
