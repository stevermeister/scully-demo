import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat, CatService } from '../cat.service';


@Component({
  selector: 'app-cat-list',
  template: `
    <p>Cats List</p>
    <ul>
      <li *ngFor="let cat of cats$|async">
        <a [routerLink]="['/cats', cat.id]">
          <img [src]="cat.images[0]" width="100px">
        </a>
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class CatListComponent implements OnInit {
  cats$: Observable<Cat[]>

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.cats$ = this.catService.getAll();
  }

}
