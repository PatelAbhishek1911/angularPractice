import { Component, OnInit } from '@angular/core';
import {Course} from './course';
@Component({
  selector: 'app-course-from',
  templateUrl: './course-from.component.html',
  styleUrls: ['./course-from.component.css']
})
export class CourseFromComponent implements OnInit {

  course = new Course(1, 'Angular 2', '4 days');
  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit() {
  }

}
