import {Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import {QuizService} from '../service/quiz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnChanges, OnDestroy {

  public timer = 0;
  private timerId;
  @Input() question;
  public randomArray = [3, 2, 1, 4];
  @Output() answer: EventEmitter<any> = new EventEmitter();

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.question) {
      this.randomArray = [1, 2, 3, 4].sort(() => Math.random() - 0.5);
      this.timer = 0;
      this.setTimer();    }
  }

  postAnswer(answer) {
    this.timer = 0;
    clearInterval(this.timerId);
    this.quizService.postAnswer(this.question.id, answer);
    this.answer.emit(null);
  }

  setTimer() {
    this.timerId = setInterval(() => {
      this.timer += 5;
      if (this.timer >= 100) {
        this.postAnswer('timeout');
      }
    }, 1000);
  }

  ngOnDestroy() {
    clearTimeout(this.timerId);
  }

}
