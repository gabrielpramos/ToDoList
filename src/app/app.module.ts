
//components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

//modules
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

//services
import { CategoriesService } from './services/categories';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoryDetailListComponent } from './category-detail-list/category-detail-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CategoriesListComponent,
    CategoryDetailListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'category-detail-list/:categoryid', component: CategoryDetailListComponent }
    ]),
  ],
  providers: [CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
