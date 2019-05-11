import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Sort, Order } from '../posts.model';

@Component({
  selector: 'app-post-search',
  templateUrl: './post-search.component.html',
  styleUrls: ['./post-search.component.css']
})
export class PostSearchComponent implements OnInit {


  @Output() postSearch: EventEmitter<string> = new EventEmitter();

  searchForm: FormGroup;

  constructor (private fb: FormBuilder) {} 

  sortBy: { label: string, value: Sort} [] = [
    { label: 'tytuł', value: Sort.title},
    { label: 'data', value: Sort.datetime},
  ];

  orderBy: { label: string, value: Order}[] = [
    { label: 'rosnąco', value: Order.Asc},
    { label: 'malejąco', value: Order.Desc}
  ];


  ngOnInit() {
    this.searchForm = this.fb.group({
      query: "",
      sort: Sort.datetime,
      order: Order.Asc 
    });

    this.postSearch.emit(this.searchForm.value);
  }

  search(){
    this.postSearch.emit(this.searchForm.value);
  }

}

