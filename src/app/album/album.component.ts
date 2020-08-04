import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, ParamMap  } from '@angular/router';
import { AlbumService } from '../services/album.service';
import Album from '../models/album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit, OnDestroy {
  id: number;
  private idSub: any;
  selectedAlbum: any;

  private albums: Album[];

  constructor(private route: ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit(): void {
    // Get Id from URL and subscribe to it
    this.idSub = this.route.params.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      this.id = +params['id'];
    });

    // Get album using passed id
    this.selectedAlbum = this.albumService.getAlbumById(this.id);
  }

  ngOnDestroy(): void {
    this.idSub.unsubscribe();
  }
}
