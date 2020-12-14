import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  title = 'Authors';
  numOfAuthor;
  authors;
  constructor(private service: AuthorService) { 
    this.authors = service.getAuthors();
    this.numOfAuthor = this.authors.length;
  }

  ngOnInit(): void {
  }

}
