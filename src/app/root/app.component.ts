import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          const title = new Set();
          title.add('MMARIFAT');
          let child = this.activatedRoute.firstChild;
          while (child) {
            if (child?.snapshot?.data.title) {
              title.add(child?.snapshot?.data.title);
            }
            child = child?.firstChild;
          }
          return Array.from(title).join(' | ');
        })
      )
      .subscribe((title: string) => {
        window.scrollTo(0, 0);
        this.titleService.setTitle(title);
      });
  }
}
