import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { AboutComponent } from "./components/about/about.component";
import { HeroeComponent } from "./components/heroe/heroe.component";
import { SeekerComponent } from "./components/seeker/seeker.component";

const APP_ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  { path: "heroes", component: HeroesComponent },
  { path: "heroe/:id", component: HeroeComponent },
  { path: "about", component: AboutComponent },
  { path: "seeker/:termino", component: SeekerComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
