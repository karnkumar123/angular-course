import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import {Post} from './posts.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  postsList: Post[];
  error = null;

  constructor(
    private _postService: PostService
  ) { }

  ngOnInit(): void {
    this.fetchinPosts();

    this._postService.errorSubscription.subscribe((data) => {
      this.error = data;
    })
  }

  onSubmit(post: {title: string, content: string}){
    this._postService.submitPosts(post).subscribe(data => {
      console.log('submitted->', data);
      this.fetchinPosts();
    }, (error) => {
      this.error = error
    });
  }

  fetchinPosts(){
      this._postService.getPosts().subscribe((data) => {
          this.postsList = data;
      },(error) => {
        this._postService.errorSubscription.next(error.statusText)
      });
  }

  deleteAllAPosts(){
    this._postService.deleteAllPosts().subscribe((data) => {
      console.log('Deleted->',data);
      this.fetchinPosts();
    })
  }

}
