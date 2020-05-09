import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {QuizService} from '../service/quiz.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  public questions = [];
  public currentQuestion;
  public currentIndex = 0;

  constructor(
    private http: HttpClient,
    public router: Router,
    private quizService: QuizService
  ) { }

  ngOnInit() {
    this.questions = this.quizService.getQuestions();
    this.currentQuestion = this.questions[this.currentIndex];
  }

  getNextQuestion() {
    if (++this.currentIndex < this.questions.length) {
      this.currentQuestion = this.questions[this.currentIndex];
    } else {
      this.quizService.clearData();
      this.router.navigate(['result']);
    }
  }

}
