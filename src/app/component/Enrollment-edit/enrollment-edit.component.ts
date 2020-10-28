import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Enrollment } from 'src/app/domain/Enrollment';
import { EnrollmentService } from 'src/app/service/Enrollment.service';

@Component({
  selector: 'app-enrollment-edit',
  templateUrl: './enrollment-edit.component.html',
  styleUrls: ['./enrollment-edit.component.css']
})
export class EnrollmentEditComponent implements OnInit {

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
  public edit() {
    console.log(this.enrollment);

    this.enrollmentService.edit(this.enrollment).subscribe(data => {
      this.router.navigate(['/course-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });

  }
}
