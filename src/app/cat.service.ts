import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export type Cat = {
  id: number,
  name: string,
  images: string[]
}


const cats: Cat[] = [
  { id: 1, name: "big", images: ["http://i.imgur.com/CRSzQ4r.png", "http://i.imgur.com/l94Rfsj.png", "http://i.imgur.com/304PJ9p.png", "http://i.imgur.com/mOnnvms.png", "http://i.imgur.com/k5Eif3W.png", "http://i.imgur.com/xSVGJu4.png"] },
  { id: 2, name: "evil", images: ["http://i.imgur.com/4s6OJQj.png", "http://i.imgur.com/su9edl7.png", "http://i.imgur.com/bCgGgBM.png"] },
  { id: 3, name: "grumpy", images: ["http://i.imgur.com/EPGllv4.png", "http://i.imgur.com/DKFbRQ0.png", "http://i.imgur.com/bIqsqSK.png"] },
  { id: 4, name: "inHats", images: ["http://i.imgur.com/6XcjacS.png", "http://i.imgur.com/GC3lgzg.png", "http://i.imgur.com/q7MZgiG.png", "http://i.imgur.com/VkfIH4a.png", "http://i.imgur.com/zy9cJgS.png", "http://i.imgur.com/OA4rZbW.png", "http://i.imgur.com/w0SzOoY.png", "http://i.imgur.com/zVZXKK4.png", "http://i.imgur.com/ZTn8bgI.png", "http://i.imgur.com/iVWFUlj.png"] },
  { id: 5, name: "kitten", images: ["http://i.imgur.com/KqFuFSQ.png", "http://i.imgur.com/H3YmnA3.png", "http://i.imgur.com/qqWyfvA.png", "http://i.imgur.com/GS6HUnP.png", "http://i.imgur.com/bTvoEeb.png"] },
]

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor() { }

  getAll() {
    return of(cats);
  }

  getOne(id) {
    return of(cats.find(cat => cat.id == id));
  }
}


