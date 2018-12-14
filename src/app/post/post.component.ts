import { Component, OnInit } from '@angular/core';

import { PostRepositoryService } from './post-repository.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {
    posts: any[] = [];
    error: string = '';

    constructor(private postRepository: PostRepositoryService) {}

    ngOnInit() {
        this.postRepository
            .getList()
            .subscribe(
                data => this.posts = data,
                error => this.error = error.message
            );
    }
}