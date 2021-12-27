import { Injectable } from '@angular/core';
import { Course } from './couse';
import { Observable,of } from 'rxjs';
import { course_array } from './mock-course';
@Injectable({
  providedIn: 'root'
})
export class SrvcourseService {

  constructor() { }
  getCourseList():Observable<Course[]>{
    return of(course_array)
  }
}
