import { Injectable } from '@angular/core';
import { Album, Song } from '../models/album';

// Array of albums (that should be retrieved as JSON from a web service instead...)
const albums: Album[] = [
  { index: 1, title: '1999', artist: 'Prince', released: 1982, songs: [
      { index: 1, title: '1999' },
      { index: 2, title: 'Little Red Corvette' },
      { index: 3, title: 'Delirious' },
    ],
  },
  { index: 2, title: 'The Highland Connection', artist: 'Runrig', released: 1979, songs: [
      { index: 1, title: 'Gamhna Gealia' },
      { index: 2, title: 'Main' },
      { index: 3, title: 'What Time' },
    ],
  },
  { index: 3, title: 'New Gold Dream', artist: 'Simple Minds', released: 1982, songs: [
      { index: 1, title: 'Someone, Somewhere in Sumertime' },
      { index: 2, title: 'Coulours Fly and Catherine Wheel' },
      { index: 3, title: 'Promised You a Miracle' },
    ],
  },
];

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor() { }

  getAlbums(): Album[] {
    return albums;
  }
}
