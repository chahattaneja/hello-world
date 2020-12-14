import { NotFoundError } from './../common/error/not-found-error';
import { PostService } from './service/post.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{

  posts: any[];
  
  constructor(private service: PostService) {
   }

  ngOnInit(): void {
      this.service.getAll()
      .subscribe(
        posts => {
        this.posts = posts;
        })
  }

   createPost(input: HTMLInputElement) {
      let post= { title: input.value };
      this.posts.splice(0, 0, post);

      input.value = "";
      
      this.service.create(post)
      .subscribe(
        (response) => {
          post["id"] = response["id"];
        });
   }

   updatePost(post) {
     this.service.update(post)
     .subscribe(
       response => {
        console.log(response);
        })
   }

   deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    
    this.service.delete(1000)
    .subscribe(
        response => {
          null
        },
        (error: Response) => {
          this.posts.splice(index,0,post);         

          if(error instanceof NotFoundError) {
            alert("Already deleted.")
          }
          else {
            throw error;
          }
        })
   }
}
