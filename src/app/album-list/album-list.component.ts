import { Component, OnInit } from '@angular/core';
import { Album } from '../models/album';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
  providers: [ AlbumService ],
})
export class AlbumListComponent implements OnInit {

  albums: Album[];

  constructor(albumService: AlbumService) {
    this.albums = albumService.getAlbums();
  }

  ngOnInit(): void {
  }

}
