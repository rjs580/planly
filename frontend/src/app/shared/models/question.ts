export class Question {
  question: string;
  answer: string;
  extras: string = null;

  constructor(question: string, answer: string, extras?: string) {
    this.question = question;
    this.answer = answer;
    if (extras) {
      this.extras = extras;
    }
  }
}
