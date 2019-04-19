import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts = [];

  constructor(private postsService: PostsService,
    private router: Router) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe((res:any) => {
      console.log('res', res);
      this.posts = res;
    });
  }

  getPosts(id){
    this.router.navigateByUrl('postdetails/'+id);
  }

  addPost(){
    this.router.navigateByUrl('createpost');
   /*  this.postsService.createPost().subscribe(res => {
      console.log(res);
      
    }); */
  }

}
