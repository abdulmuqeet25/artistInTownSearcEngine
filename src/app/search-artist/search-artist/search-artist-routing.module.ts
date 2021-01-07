import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchArtistComponent} from "./search-artist.component";

const routes: Routes = [
  { path: '', component: SearchArtistComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchArtistRoutingModule { }