import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { 
  
  }

 

  getPosts(){
    return this.httpClient.get(environment.REST_URL);
  }

  getPostDetails(id){
    return this.httpClient.get(environment.REST_URL + id);
  }

  getPostComments(id){
    return this.httpClient.get(environment.REST_URL + id + "/comments");
  }

  createPost(formValue){
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.httpClient.post(environment.REST_URL, formValue, {headers: header});
  }

  updatePost(data){
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.httpClient.put(environment.REST_URL , data.id, {headers: header});
  }

}
