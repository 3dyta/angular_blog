import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
    selector: 'blog-title',
    templateUrl: './title.component.html'
})

export class TitleComponent implements OnInit, OnChanges {
    @Input() text: string = 'Blog';
    
    ngOnInit() {
        console.log('ngOnInit');
    }

    ngOnChanges() {
        console.log('ngOnChanges');
    }
}