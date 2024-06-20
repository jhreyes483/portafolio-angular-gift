import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  //public tags: string[] = [];

  constructor(
    private _gifsService: GifsService
  ) { }


  get tags(){
    return this._gifsService.tagsHistory
  }

  getTag( tag : string){
    this._gifsService.searchTag(tag)
  }





}
