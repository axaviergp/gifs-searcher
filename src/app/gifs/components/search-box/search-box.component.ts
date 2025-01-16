import { GifsService } from './../../services/gifs.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  standalone: false,

  template: `
    <h5>Buscar</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Buscar Gifs ..."
      #txtTagInput
      (keyup.enter)="searchTag()"
    >
  `,
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifService: GifsService) {

  }

  // searchTag(newTag: string) {
  searchTag() {
    const newTag = this.tagInput.nativeElement.value;

    this.gifService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';
  }

}
