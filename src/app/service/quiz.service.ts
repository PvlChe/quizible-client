import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private quizId;
  private questions;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  startQuiz(playerData) {
    return this.http.post('http://35.159.16.176:80/quizzes/', {
      playerAge: playerData.age,
      playerPlz: playerData.plz,
      code: playerData.quizcode,
      complexities: [1, 2, 4],
      categories: [1, 3, 5]
    }).toPromise().then(
      res => {
        console.log('result from backend', res);
        this.setQuizData(res);
        this.router.navigate(['quiz']);
      }
    ).catch( err => {
      console.log(err);
    });
  }

  postAnswer(questionId, answer) {
    this.http.post('http://35.159.16.176:80/answers/', {
      quizId: this.quizId,
      questionId,
      answer,
      right: this.questions.filter( q => q.id === questionId)[0].answer1 === answer,
    }).toPromise().then(
      res => {
        console.log('post answer', res);
      }
    ).catch( err => {
      console.log(err);
    });
  }

  getResults() {
    return this.http.get('http://35.159.16.176:80/answers/' + this.quizId).toPromise();
  }

  setQuizData(quizData) {
    this.quizId = quizData.quizId;
    this.questions = quizData.questions;

  }

  getQuestions() {
    return this.questions;
  }

  clearData() {
    this.questions = null;
  }
}
