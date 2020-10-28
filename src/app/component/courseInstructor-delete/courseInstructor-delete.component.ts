import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/domain/course';
import { CourseInstructor } from 'src/app/domain/courseInstructor';
import { CourseService } from 'src/app/service/course.service';
import { CourseInstructorService } from 'src/app/service/courseInstructor.service';

@Component({
  selector: 'app-courseInstructor-delete',
  templateUrl: './courseInstructor-delete.component.html',
  styleUrls: ['./courseInstructor-delete.component.css']
})
export class CourseInstructorDeleteComponent implements OnInit {

  public id: number;
  public courseInstructor: CourseInstructor;
  
  public showMsg: boolean = false;
  public msg: string;
  public type: string;

  constructor(public courseInstructorService: CourseInstructorService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getdById();
  }

  public getdById() {
    let param = this.activatedRoute.params['_value'];
    this.id = param.id;

    this.courseInstructorService.getById(this.id).subscribe(data => {
      this.courseInstructor = data;
    });
  }
  public delete() {
    
    this.courseInstructorService.delete(this.courseInstructor.ID).subscribe(data => {
      this.router.navigate(['/courseInstructor-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });

  }
}
