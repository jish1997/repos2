import { Component, OnInit } from '@angular/core';
import { Course } from '../couse';
import { SrvcourseService } from '../srvcourse.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  selectedCourse :Course;
  courses:Course[];
  constructor(private crsService:SrvcourseService) { }
  ngOnInit(): void {
    this.fetchData();
  }
  onCourseClick(course:Course):void{
    this.selectedCourse = course;
  }
  fetchData():void{
     this.crsService.getCourseList().subscribe(item=>this.courses=item)
  }
}
