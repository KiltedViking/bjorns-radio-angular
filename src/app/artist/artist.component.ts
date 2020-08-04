import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AlbumService } from '../services/album.service';
import Album from '../models/album';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit, OnDestroy {
  artist: string;
  private artistSub: any;
  albums: Album[];

  constructor(private route: ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit(): void {
    // Get Id from URL and subscribe to it
    this.artistSub = this.route.params.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      this.artist = params['artist'];
    });

    this.albums = this.albumService.getAlbumByArtist(this.artist);
  }

  ngOnDestroy(): void {
    this.artistSub.unsubscribe();
  }
}
