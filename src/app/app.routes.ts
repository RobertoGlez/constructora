import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';


const appRoutes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }

];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true} );
