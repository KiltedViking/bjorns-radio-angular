import { Injectable } from '@angular/core';
import Album from '../models/album';
// import Song from '../models/song';

// Array of albums (that should be retrieved as JSON from a web service instead...)
const albums: Album[] = [
  { index: 1, title: '1999', artist: 'Prince', released: 1982, songs: [
      { index: 1, title: '1999' },
      { index: 2, title: 'Little Red Corvette' },
      { index: 3, title: 'Delirious' },
    ],
  },
  { index: 2, title: 'The Highland Connection', artist: 'Runrig', released: 1979, songs: [
      { index: 1, title: 'Gamhna Gealica' },
      { index: 2, title: 'Main' },
      { index: 3, title: 'What Time' },
    ],
  },
  { index: 3, title: 'New Gold Dream', artist: 'Simple Minds', released: 1982, songs: [
      { index: 1, title: 'Someone, Somewhere in Summertime' },
      { index: 2, title: 'Colours Fly and Catherine Wheel' },
      { index: 3, title: 'Promised You a Miracle' },
    ],
  },
  { index: 4, title: 'Once Upon a Time', artist: 'Simple Minds', released: 1985, songs: [
      { index: 1, title: 'Once Upon a Time' },
      { index: 2, title: 'All the Things She Said' },
      { index: 3, title: 'Ghost Dancing' },
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

  getAlbumById(id: number): Album  {
    // Get albums with matching Id (by first filtering array)
    const filteredAlbums = albums.filter(album => album.index === id);

    if (filteredAlbums.length > 0) {
      return filteredAlbums[0];
    }
    // else {
    //   return null;
    // }
  }

  getAlbumByArtist(artist: string): Album[]  {
    // Get albums with matching artist
    return albums.filter(album => album.artist === artist);
  }
}
