import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  postForm:FormGroup;
  allPosts = [];
  postLength;

  constructor(private formBuilder: FormBuilder, private postsSevice: PostsService) {
    this.postForm = this.formBuilder.group({
      title : ['', Validators.required],
      body: ['', Validators.required]
    });
   }

  ngOnInit() {
    this.postsSevice.getPosts().subscribe(res => {
      this.allPosts.push(res);
      console.log(this.allPosts[0].length);
      this.postLength = this.allPosts[0].length;
    });
  }
  submit(){
    Object.assign(this.postForm.value, {userId: 10, "id":this.postLength++});
    this.postsSevice.createPost(this.postForm.value).subscribe(res => {
      console.log(res);
    });
  }
}
