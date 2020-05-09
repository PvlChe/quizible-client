import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {QuizService} from '../service/quiz.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(
    private router: Router,
    private quizService: QuizService
  ) { }

  ngOnInit(): void {
  }

  start(age, plz , quizcode) {
    this.quizService.startQuiz({age, plz, quizcode});
  }

}
