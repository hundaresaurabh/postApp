import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../services/posts.service';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  postDetailsId;
  postData = [];
  postComments = [];
  comments = [];

  constructor(private activatedRoute: ActivatedRoute,
    private postsService: PostsService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.postDetailsId = this.activatedRoute.snapshot.params.id;
    this.postsService.getPostDetails(this.postDetailsId).subscribe(item => {
      this.postData.push(item);
      this.postsService.getPostComments(this.postDetailsId).subscribe( res => {
        
        this.postComments.push(res);
        this.postComments.filter(x => {
          x.forEach(element => {
            if(element.postId === Number(this.postDetailsId)){
              this.comments.push(element)
            }
          });
          
        });
      });
    }); 
  }


  editPost(data){
    console.log(data);
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '350px',
      data: data
    });
    dialogRef.componentInstance.data = data;

    const sub = dialogRef.componentInstance.changedPost.subscribe((item) => {
      console.log('item**',item);
      this.postData = [];
      this.postData.push(item);
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('result##', result);
      
    });
    
  }

}
