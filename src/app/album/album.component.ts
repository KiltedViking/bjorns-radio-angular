import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { Album } from '../models/album';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  id: number;
  selectedAlbum: any;
  private sub: any;

  private albums: Album[];

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {
    this.albums = albumService.getAlbums();
  }

  ngOnInit(): void {
    // Get Id from URL
    this.sub = this.route.params.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      this.id = +params['id'];
    });

    // Get album with matching Id (by first filtering array)
    const filteredAlbums = this.albums.filter(album => album.index === this.id);

    if (filteredAlbums.length > 0) {
      this.selectedAlbum = filteredAlbums[0];
    }
    else {
      this.selectedAlbum = null;
    }
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
