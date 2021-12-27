import { Component, OnInit,Input } from '@angular/core';
import { Course } from '../couse';
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  @Input() data: Course;
  constructor() { }

  ngOnInit(): void {
  }

}
