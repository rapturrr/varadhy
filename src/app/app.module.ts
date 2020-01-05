import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './home/header/header.component';
import { AsideComponent } from './home/aside/aside.component';
import {  FooterComponent} from './home/footer/footer.component';
import { CopyrightComponent } from './home/copyright/copyright.component';
import { AboutvaradhyComponent } from './aboutvaradhy/aboutvaradhy.component';
import { ContactusComponent } from './contactus/contactus.component';
import { OurpeopleComponent } from './ourpeople/ourpeople.component';
import { CarrerComponent } from './carrer/carrer.component';
import { ServicesComponent } from './services/services.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { MainContentComponent } from './home/main-content/main-content.component';

import { YouraddsComponent } from './youradds/youradds.component';
import { PostaddsComponent } from './postadds/postadds.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TearmsAndConditionComponent } from './tearms-and-condition/tearms-and-condition.component';
import { AdComponentComponent } from './home/ad-component/ad-component.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import {SlideshowModule} from 'ng-simple-slideshow';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    CopyrightComponent,
    AboutvaradhyComponent,
    ContactusComponent,
    OurpeopleComponent,
    CarrerComponent,
    ServicesComponent,
    ForgetpasswordComponent,
    MainContentComponent,

    YouraddsComponent,
    PostaddsComponent,
    TearmsAndConditionComponent,
    AdComponentComponent,
    AddDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SlideshowModule,
    RouterModule.forRoot([
     
      { 
        path:'',
        component:LoginComponent
     },
  
     { 
      path:'register',
      component:RegisterComponent
    },
    { 
      path:'login',
      component:LoginComponent
    },
    { 
      path:'aboutvaradhy',
      component:AboutvaradhyComponent
    },
    { 
      path:'carrer',
      component:CarrerComponent
    },
    { 
      path:'contactus',
      component:ContactusComponent
    },
    { 
      path:'ourpeople',
      component:OurpeopleComponent
    },
    { 
      path:'services',
      component:ServicesComponent
    },
    { 
      path:'forgetpassword',
      component:ForgetpasswordComponent
    },
    { 
      path:'yourAdds',
      component: YouraddsComponent
    },
    { 
      path:'postadds',
      component: PostaddsComponent
    },
    { 
      path:'tearms-and-conditoon',
      component: TearmsAndConditionComponent
    },
    { 
      path:'add-details',
      component: AddDetailsComponent
    },
    { 
      path:'home',
      component:HomeComponent
    },
   
    
  
  
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
