import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UseridComponent } from './userid/userid.component';
import { CompletedComponent } from './completed/completed.component';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { TrainerhomeComponent } from './trainerhome/trainerhome.component';
import { TraineridComponent } from './trainerid/trainerid.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminComponent } from './admin/admin.component';
import { StartpageComponent } from './startpage/startpage.component';
import { SignupmentorComponent } from './signupmentor/signupmentor.component';
import { AddUserComponent } from './user/add-user.component';
import { MentorComponent } from './mentor/mentor.component';
import { TechnologyComponent } from './technology/technology.component';
import { SkillComponent } from './skill/skill.component';
import { AddMentorComponent } from './mentor/add-mentor.component';
import { AddSkillComponent } from './skill/add-skill.component';
import { AddTechnologyComponent } from './technology/add-technology.component';
import { TrainingComponent } from './training/training.component';
import { AddTrainingComponent } from './training/add-training.component';
import { AddPaymentComponent } from './payment/add-payment.component';
import { TrainingCurrentComponent } from './training/trainingcurrent.component';
import { TrainingCompletedComponent } from './training/trainingcompleted.component';
import { PageComponent } from './page/page.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { TrainingdetailsforuserComponent } from './training/trainingdetailsforuser.component';
import { TrainingdetailsformentorComponent } from './training/trainingdetailsformentor.component';
import { TrainingmentorComponent } from './training/trainingmentor.component';
import { PaymentMentorComponent } from './payment/paymentmentor.component';
import { PaymentUserComponent } from './payment/paymentuser.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component:StartpageComponent },
  { path: 'add', component: AddUserComponent},
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'userid', component: UseridComponent },
  { path: 'completed', component: CompletedComponent },
  { path: 'home', component: HomeComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'trainerhome', component: TrainerhomeComponent },
  { path: 'trainerid', component: TraineridComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'addpayment', component: AddPaymentComponent },
  { path: 'paymentmentor', component: PaymentMentorComponent },
  { path: 'paymentuser', component: PaymentUserComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'startpage', component: StartpageComponent },
  { path: 'signupmentor', component: SignupmentorComponent },
  { path: 'user', component: UserComponent },
  { path: 'mentor', component: MentorComponent },
  { path: 'addmentor', component: AddMentorComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'addtechnology', component: AddTechnologyComponent },
  { path: 'skill', component: SkillComponent },
  { path: 'addskill', component: AddSkillComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'trainingcurrent', component: TrainingCurrentComponent },
  { path: 'trainingdetailsforuser', component: TrainingdetailsforuserComponent },
  { path: 'trainingdetailsformentor', component: TrainingdetailsformentorComponent },
  { path: 'trainingmentor', component: TrainingmentorComponent },
  { path: 'addtraining', component: AddTrainingComponent },
  { path: 'trainingcompleted', component: TrainingCompletedComponent },
  { path: 'page', component: PageComponent },
  { path: 'signuppage', component: SignuppageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
