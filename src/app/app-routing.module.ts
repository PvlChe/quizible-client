import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartComponent} from './start/start.component';
import {QuizComponent} from './quiz/quiz.component';
import {ResultComponent} from './result/result.component';


const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'result', component: ResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
