import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { EnrollmentService } from 'src/app/service/Enrollment.service';
import { EnrollmentEditComponent } from '../Enrollment-edit/enrollment-edit.component';


@Component({
  selector: 'app-enrollment-list',
  templateUrl: './enrollment-list.component.html',
  styleUrls: ['./enrollment-list.component.css']
})
export class EnrollmentListComponent implements OnInit, OnDestroy {

  public enrollments: EnrollmentEditComponent[];
  public subEnrollment: Subscription;
  constructor( public enrollmentService: EnrollmentService) { }
ngOnDestroy(): void{
  this.subEnrollment.unsubscribe();

}
  ngOnInit(): void {
    this.getAll();
  }
  public getAll(){
this.subEnrollment = this.enrollmentService.getAll().subscribe(data =>{
  this.enrollments = data;
  //OJO POSIBLE ERROR Enrollment ESTABA enrollment
});

  }

}
