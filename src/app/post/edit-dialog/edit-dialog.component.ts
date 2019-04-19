import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  editPostForm:FormGroup;
  @Output() changedPost = new EventEmitter<any>(true);

  constructor( public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private formBuilder: FormBuilder, private postsSevice: PostsService) {

      this.editPostForm = this.formBuilder.group({
        title : [data.title],
        body: [data.body]
      });
     }

  ngOnInit() {
    
  }

  submit(){
    Object.assign(this.editPostForm.value, {userId: this.data.userId, id:this.data.id});

    this.changedPost.emit(this.editPostForm.value);
    this.postsSevice.updatePost(this.editPostForm.value).subscribe(res => {
      console.log('res**', JSON.stringify(res));
    });
  }

}
