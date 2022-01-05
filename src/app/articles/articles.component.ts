import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit, OnDestroy {
  posts: ScullyRoute[] = [];
  private routeSub: Subscription | undefined;

  constructor(private scullyService: ScullyRoutesService) {}

  ngOnInit(): void {
    // this.routeSub?.add(
    //   this.scullyService.available$.subscribe((posts: any) => {
    //     this.posts = posts.filter((post: any) => post.title);
    //   })
    // );
    this.scullyService.available$.subscribe((posts: any) => {
      this.posts = posts.filter((post: any) => post.title);
      //test11
    });
  }

  ngOnDestroy(): void {
    //this.routeSub?.unsubscribe;
  }
}
