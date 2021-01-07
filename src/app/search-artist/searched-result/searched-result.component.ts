import { Component, HostListener, Input, OnInit } from '@angular/core';
import { SearchArtistService } from '../search-artist.service';

@Component({
  selector: 'app-searched-result',
  templateUrl: './searched-result.component.html',
  styleUrls: ['./searched-result.component.css']
})
export class SearchedResultComponent implements OnInit {

  @Input() artistData;
  panelOpenState = false;
  fb_URL;
  artistEvents;
  showLoader = false;
  eventFlag = false;
  showScroll: boolean;
  showScrollHeight = 50;
  hideScrollHeight = 10;

  constructor(private SearchArtistService: SearchArtistService) { }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) {
      this.showScroll = true;
    }
    else if (this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight) {
      this.showScroll = false;
    }
  }
  ngOnInit(): void {
  }
  scrollToTop() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 5));
      }
    })();
  }
  socialLinks() {
    this.fb_URL = this.artistData.facebook_page_url;
    window.open(this.fb_URL)
  }
  eventArtist(eventArtist, target: HTMLElement) {
    this.eventFlag = true;
    this.showLoader = true;
    const sessionStorageData = JSON.parse(localStorage.getItem(this.artistData.id));
    if (sessionStorageData) {
      this.showLoader = false;
      this.artistEvents = sessionStorageData;
    }
    else {
      this.SearchArtistService.getEventsofArtist(eventArtist).subscribe((events) => {
        this.artistEvents = events;
        sessionStorage.setItem(this.artistData.id, JSON.stringify(events));
        setTimeout(() => {
          target.scrollIntoView();
          this.showLoader = false;
        }, 500);
      }, error => {
        this.showLoader = false;
      })
    }

  }
}
