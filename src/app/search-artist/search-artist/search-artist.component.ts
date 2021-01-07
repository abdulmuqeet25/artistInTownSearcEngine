import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SearchArtistService } from '../search-artist.service';
import { fromEvent, Subject, BehaviorSubject } from 'rxjs';
import { debounceTime, takeUntil } from "rxjs/operators";
import { FormControl } from "@angular/forms";


@Component({
  selector: 'app-search-artist',
  templateUrl: './search-artist.component.html',
  styleUrls: ['./search-artist.component.css']
})
export class SearchArtistComponent implements OnInit {
  searchedText;
  searchArtist = new FormControl();
  searchedResult;
  showLoader: boolean = false;

  constructor(private SearchArtistService: SearchArtistService) { }

  ngOnInit(): void { }
  searchFunc() {
    if (this.searchArtist.value === null) {
      console.log(this.searchArtist.value);
      this.searchArtist.errors
      return
    }
    else {
      this.showLoader = true;
      const localStorageData = JSON.parse(localStorage.getItem(this.searchArtist.value));
      if (localStorageData) {
        this.showLoader = false;
        this.searchedResult = localStorageData;
      }
      else {
        this.searchedResult = "";
        this.SearchArtistService.get(this.searchArtist.value).subscribe((artist) => {
          localStorage.setItem(this.searchArtist.value, JSON.stringify(artist));
          this.searchedResult = artist;
          this.showLoader = false;
        }, error => {
          this.showLoader = false;
        });
      }
    }
  }
  resetForm() {
    this.searchedResult = "";
    this.searchArtist.reset();
  }
}
