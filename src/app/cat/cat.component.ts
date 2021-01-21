import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cat, CatService } from '../cat.service';
import {pluck, switchMap } from 'rxjs/operators'


@Component({
  selector: 'app-cat',
  template: `
    <h1>{{cat.name}}</h1>
    <img *ngFor="let imageUrl of cat.images" [src]="imageUrl">
  `,
  styles: [
  ]
})
export class CatComponent implements OnInit {
  cat: Cat;

  constructor(private catService: CatService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(
      pluck('catId'),
      switchMap(id => this.catService.getOne(id))
    )
    .subscribe(cat => this.cat = cat);
  }

}
