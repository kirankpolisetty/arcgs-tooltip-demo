import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'map',
        loadComponent: () => import ('./arcgis-map/arcgis-map.js').then(m=> m.ArcgisMap)

    },
    {path: '', redirectTo: 'map', pathMatch: 'full'}
];
