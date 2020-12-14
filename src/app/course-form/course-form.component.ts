import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {
  getCourseCategories() {
    return [
              { name:"Development", id:1},
              { name:"Art", id:2}, 
              { name:"Languages", id:3}
            ];
  }

  submit(data) {
    console.log(data)
  }
 
}
