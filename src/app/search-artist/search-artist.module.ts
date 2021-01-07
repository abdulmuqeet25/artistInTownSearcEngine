import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import { SearchArtistRoutingModule } from './search-artist/search-artist-routing.module';
import { SearchArtistComponent } from './search-artist/search-artist.component';
import { AppMaterialModule } from 'src/app/material/app-material/app-material.module';
import { FormsModule } from '@angular/forms'
import { SearchedResultComponent } from './searched-result/searched-result.component';
import { FlexModule } from "@angular/flex-layout";
import { ArtistEventsComponent } from './artist-events/artist-events.component';



@NgModule({
  imports: [
    SearchArtistRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    AppMaterialModule,
    FormsModule,
    FlexModule
  ],
  declarations: [SearchArtistComponent,
    SearchedResultComponent,
    ArtistEventsComponent
  ]
})
export class SearchArtistModule { }