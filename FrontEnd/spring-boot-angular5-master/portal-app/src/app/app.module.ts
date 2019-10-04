import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app.routing.module';
import { UserService } from './user/user.service';
import { HttpClientModule } from "@angular/common/http";
import { SigninComponent } from './signin/signin.component';
import { SigninService } from './signin/signin.service';
import { SignupComponent } from './signup/signup.component';
import { SignupService } from './signup/signup.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { UseridComponent } from './userid/userid.component';
import { UseridService } from './userid/userid.service';
import { CompletedComponent } from './completed/completed.component';
import { CompletedService } from './completed/completed.service';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminloginService } from './adminlogin/adminlogin.service';
import { TrainerhomeComponent } from './trainerhome/trainerhome.component';
import { TrainerhomeService } from './trainerhome/trainerhome.service';
import { TraineridComponent } from './trainerid/trainerid.component';
import { TraineridService } from './trainerid/trainerid.service';
import { PaymentComponent } from './payment/payment.component';
import { PaymentService } from './payment/payment.service';
import { AdminComponent } from './admin/admin.component';
import { AdminService } from './admin/admin.service';
import { StartpageComponent } from './startpage/startpage.component';
import { StartpageService } from './startpage/startpage.service';
import { SignupmentorComponent } from './signupmentor/signupmentor.component';
import { SignupmentorService } from './signupmentor/signupmentor.service';
import { AddUserComponent } from './user/add-user.component';
import { MentorComponent } from './mentor/mentor.component';
import { MentorService } from './mentor/mentor.service';
import { TechnologyComponent } from './technology/technology.component';
import { TechnologyService } from './technology/technology.service';
import { SkillComponent } from './skill/skill.component';
import { AddSkillComponent } from './skill/add-skill.component';
import { SkillService } from './skill/skill.service';
import { AddMentorComponent } from './mentor/add-mentor.component';
import { AddTechnologyComponent } from './technology/add-technology.component';
import { TrainingComponent } from './training/training.component';
import { AddTrainingComponent } from './training/add-training.component';
import { TrainingService } from './training/training.service';
import { AddPaymentComponent } from './payment/add-payment.component';
import { TrainingCurrentComponent } from './training/trainingcurrent.component';
import { TrainingCompletedComponent } from './training/trainingcompleted.component';
import { PageComponent } from './page/page.component';
import { PageService } from './page/page.service';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { SignuppageService } from './signuppage/signuppage.service';
import { TrainingdetailsforuserComponent } from './training/trainingdetailsforuser.component';
import { TrainingdetailsformentorComponent } from './training/trainingdetailsformentor.component';
import { TrainingmentorComponent } from './training/trainingmentor.component';
import { PaymentMentorComponent } from './payment/paymentmentor.component';
import { PaymentUserComponent } from './payment/paymentuser.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    UserComponent,
    SigninComponent,
    SignupComponent,
    LoginComponent,
    UseridComponent,
    CompletedComponent,
    HomeComponent,
    AdminloginComponent,
    TrainerhomeComponent,
    TraineridComponent,
    AdminComponent,
    StartpageComponent,
    SignupmentorComponent,
    AddUserComponent,
    MentorComponent,
    AddMentorComponent,
    TechnologyComponent,
    AddTechnologyComponent,
    SkillComponent,
    AddSkillComponent,
    TrainingComponent,
    TrainingCurrentComponent,
    TrainingCompletedComponent,
    TrainingdetailsforuserComponent,
    TrainingdetailsformentorComponent,
    TrainingmentorComponent,
    AddTrainingComponent,
    PaymentComponent,
    PaymentMentorComponent,
    PaymentUserComponent,
    AddPaymentComponent,
    PageComponent,
    SignuppageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    NgCircleProgressModule.forRoot({
      
      radius: 25,
      outerStrokeWidth: 8,
      innerStrokeWidth: 0,
      outerStrokeColor: "cyan",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
 
  ],
  providers: [UserService, SigninService, StartpageService, 
      SignupService, AdminService, PaymentService, TraineridService, LoginService, 
      TrainerhomeService, UseridService, CompletedService, HomeService, 
      AdminloginService, SignupmentorService, MentorService, TechnologyService, 
      SkillService, TrainingService, PageService, SignuppageService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
