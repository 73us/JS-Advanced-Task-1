import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson01',
  templateUrl: './lesson01.component.html',
  styleUrls: ['./lesson01.component.scss'],
})
export class Lesson01Component implements OnInit {
  public badWords = [''];
  public showBanWords = this.badWords.join(' ');
  public inputPlaceholder = 'word here..';
  public textareaPlaceholder = 'text here..';
  public badWord = '';
  public isInputEmpty = true;
  public isTxtAreaEmpty = true;
  public cenzorTextVal = '';
  public arrCheck: any;

  constructor() {}
  ngOnInit(): void {}
  addWord(): void {
    if (this.badWord != '') {
      this.badWords.push(this.badWord);
      this.render();
      this.badWord = '';
      this.inputPlaceholder = 'word here..';
      this.isInputEmpty = true;
    } else {
      this.inputPlaceholder = 'Please write a word!';
      this.isInputEmpty = false;
    }
  }
  resetWords(): void {
    this.badWords = [];
    this.cenzorTextVal = '';
    this.render();
  }

  cenzorText(): void {
    if (this.cenzorTextVal != '' && this.badWords.length > 0) {
      this.arrCheck = this.cenzorTextVal.split(' ');
      for (let i = 0; i < this.arrCheck.length; i++) {
        for (let j = 0; j < this.badWords.length; j++) {
          if (this.arrCheck[i] == this.badWords[j]) {
            let res = '';
            for (let a = 0; a < this.arrCheck[i].length; a++) {
              res += '*';
            }
            this.arrCheck[i] = res;
          }
        }
      }
      this.cenzorTextVal = this.arrCheck.join(' ');
      this.isTxtAreaEmpty = true;
    } else {
      this.textareaPlaceholder = 'Please write a text!';
      this.isTxtAreaEmpty = false;
    }
  }
  render(): void {
    this.showBanWords = this.badWords.join(' ');
  }
}
