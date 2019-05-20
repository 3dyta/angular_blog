import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  postForm: FormGroup;

  showErrors: boolean = false

  constructor(private fb: FormBuilder, private postService: PostsService) { }

  ngOnInit() {
    this.postForm = this.fb.group({
    title: ["", Validators.required],
    datetime: ["", Validators.required],
    postFile: "",
    content: ["", Validators.required]
    })
  }

  submit(){
    this.showErrors = false;

    if (this.postForm.valid) {
      const post = this.postForm.value;
      this.postService.createPost(post)
      .then(res => console.log(res))
      .then(() => this.postForm.reset())
      .catch(err => this.showErrors = true);
     }

    else if (this.postForm.invalid) {
      this.showErrors = true
    }
  }

}
