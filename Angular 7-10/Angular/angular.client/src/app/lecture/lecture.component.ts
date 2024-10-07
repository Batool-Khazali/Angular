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



  /////////////////////////////Wed 2-10

 

  obj = {
    name: "rama",
    color: "yellow",
  }

  userARRay =
    [
      {
        name: "rahaf",
        grade: 15
      },
      {
        name: "malik",
        grade : 19
      }
  ]


  ///////////////////////// 6-10

  name2: string = "BATOOL"

  num3: number = 1641352.656521321
  num4: number = 1652.65
  num5: number = 52.65
  num6: number = 0.526

  today: Date = new Date();

  items: string[] = ['Angular', 'React', 'Vue', 'Svelte', 'Ember'];






}
