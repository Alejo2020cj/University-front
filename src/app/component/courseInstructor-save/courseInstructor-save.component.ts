import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/domain/course';
import { CourseInstructor } from 'src/app/domain/courseInstructor';
import { CourseService } from 'src/app/service/course.service';
import { CourseInstructorService } from 'src/app/service/courseInstructor.service';

@Component({
  selector: 'app-courseInstructor-save',
  templateUrl: './courseInstructor-save.component.html',
  styleUrls: ['./courseInstructor-save.component.css']
})
export class CourseInstructorSaveComponent implements OnInit {
public courseInstructor: CourseInstructor;
public showMsg: boolean = false;
public msg: string;
public type: string;

  constructor(public courseInstructorService: CourseInstructorService, 
    private router: Router) { }

  ngOnInit(): void {
    this.courseInstructor = new CourseInstructor(0, 0, 0,  '', '',);
  }

  public save
  (){
    console.log(this.courseInstructor);
    
    this.courseInstructorService.save(this.courseInstructor).subscribe(data => {
      this.router.navigate(['/courseInstructor-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });
  }

}


