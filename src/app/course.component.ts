import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'course',
    template: `
        {{ text | summary }}
        `
})
export class CourseComponent {
    text='Thanks to all my fans around the world and thanks to the ATP for putting together this video. Thanks to all my fans around the world and thanks to the ATP for putting together this video'
}