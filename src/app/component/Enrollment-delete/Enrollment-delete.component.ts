import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enrollment } from 'src/app/domain/Enrollment';
import { CourseService } from 'src/app/service/course.service';
import { EnrollmentService } from 'src/app/service/Enrollment.service';

@Component({
  selector: 'app-enrollment-delete',
  templateUrl: './enrollment-delete.component.html',
  styleUrls: ['./enrollment-delete.component.css']
})
export class EnrollmentDeleteComponent implements OnInit {

  public id: number;
  public enrollment: Enrollment;

  public showMsg: boolean = false;
  public msg: string;
  public type: string;

  constructor(public enrollmentService: EnrollmentService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getdById();
  }

  public getdById() {
    let param = this.activatedRoute.params['_value'];
    this.id = param.id;

    this.enrollmentService.getById(this.id).subscribe(data => {
      this.enrollment = data;
    });
  }
  public delete() {

    this.enrollmentService.delete(this.enrollment.EnrollmentID).subscribe(data => {
      this.router.navigate(['/enrollment-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });

  }
}
