import { Component, OnInit } from '@angular/core';
import {QuizService} from '../service/quiz.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  public answers;
  public loaded = false;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizService.getResults().then( res => {
      console.log(res);
      this.answers = res;
      this.loaded = true;
    }).catch( err => console.log(err));
  }

}
