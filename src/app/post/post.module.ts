import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CreatePostComponent } from './create-post/create-post.component';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [PostListComponent, PostComponent, CreatePostComponent, EditDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PostRoutingModule,
    NgxPaginationModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule
  ],
  entryComponents: [EditDialogComponent]
})
export class PostModule { }
