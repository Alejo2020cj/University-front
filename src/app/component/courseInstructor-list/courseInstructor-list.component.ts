import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { Course } from 'src/app/domain/course';
import { CourseInstructor } from 'src/app/domain/courseInstructor';
import { CourseService } from 'src/app/service/course.service';
import { CourseInstructorService } from 'src/app/service/courseInstructor.service';

@Component({
  selector: 'app-courseInstructor-list',
  templateUrl: './courseInstructor-list.component.html',
  styleUrls: ['./courseInstructor-list.component.css']
})
export class CourseInstructorListComponent implements OnInit, OnDestroy {

  public courseInstructor: CourseInstructor[];
  public subCourseInstructor: Subscription;
  constructor( public courseInstructorService: CourseInstructorService) { }
ngOnDestroy(): void{
  this.subCourseInstructor.unsubscribe();

}
  ngOnInit(): void {
    this.getAll();
  }
  public getAll(){
this.subCourseInstructor = this.courseInstructorService.getAll().subscribe(data =>{
  this.courseInstructor = data;

  console.log (this.courseInstructor);
});

  }

}
