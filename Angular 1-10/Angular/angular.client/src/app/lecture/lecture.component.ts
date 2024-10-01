import { Component } from '@angular/core';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrl: './lecture.component.css'
})
export class LectureComponent {

  name: string = "batool"

  num: number = 137

  urlImg: string = "https://media.istockphoto.com/id/593300824/photo/tagetes-patula-french-marigold-tagetes-erecta.jpg?s=612x612&w=0&k=20&c=lbn849AexVp9YM6bTLQ6pQoAMIbj5YlCDEvPZpAHIkI="

  change() {
    this.num = 123
  }

  /////////////////////Thu 1-10

  display: boolean = true

  num1: number = 11
  num2: number = 12

  fruits: string[] = ["melon", "cherry", "mullberry"]

  color: string = "lilac"













}
