import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import {Album} from '../class/albums';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  @Input() albums: Album[] ;
  constructor(public httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getAlbums()
  .subscribe(albums => this.albums=albums)
  }

}
