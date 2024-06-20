import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent {

  @Input()
  public url!: string;

  @Input()
  public alt: string ='';

  ngOnInit(): void {
    if( !this.url ) throw new Error('no se ddefinio la url de la img');
  }

}
