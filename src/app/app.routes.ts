import { Routes } from '@angular/router';
import { ArcgisMap } from './arcgis-map/arcgis-map.js';

export const routes: Routes = [
    {
        path: 'map',component: ArcgisMap
    },
    {path: '', redirectTo: 'map', pathMatch: 'full'}
];
