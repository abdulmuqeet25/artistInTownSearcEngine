import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-events',
  templateUrl: './artist-events.component.html',
  styleUrls: ['./artist-events.component.css']
})
export class ArtistEventsComponent implements OnInit {
  @Input() artistData;
  @Input() artistEvent;
  constructor() { }

  ngOnInit(): void { }

}
