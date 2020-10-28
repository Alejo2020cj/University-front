import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Course } from '../domain/course';
import { environment } from 'src/environments/environment';
import { CourseInstructor } from '../domain/courseInstructor';

@Injectable({
  providedIn: 'root'
})
export class CourseInstructorService {

  public url: string;
  constructor(public httpClient: HttpClient) {
    //this.url = './assets/MOCK_DATA.json';
    // this.url = 'http://localhost/University.web/api/courses';
    this.url = environment.apiUrl + 'api/CourseInstructor/';
    
  }
  public getAll(): Observable<any> {
    return this.httpClient.get(this.url);
  }

public getById(id: number): Observable<any> {
  return this.httpClient.get(this.url + id);
};
  public save(courseInstructor:CourseInstructor): Observable<any>{
    return this.httpClient.post(this.url, courseInstructor);

  }
  public edit(courseInstructor: CourseInstructor):Observable<any> {
    return this.httpClient.put(this.url + courseInstructor.ID, courseInstructor);
  };
  
public delete(id: number) {
  return this.httpClient.delete(this.url + id);
};
}
