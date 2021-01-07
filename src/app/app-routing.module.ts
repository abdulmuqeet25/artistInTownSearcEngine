import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";


const routes: Routes = [
  {path: "", loadChildren: () => import("./search-artist/search-artist.module").then(m => m.SearchArtistModule)}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }