import { Component, OnInit } from '@angular/core';
import { loadModules } from 'esri-loader';

@Component({
  selector: 'app-arcgis-map',
  templateUrl: './arcgis-map.html',
  styleUrl: './arcgis-map.css'
})
export class ArcgisMap implements OnInit{
  async ngOnInit() {
    await this.loadMap();
  }

  async loadMap() {
    const [Map, MapView] = await loadModules([
      'esri/Map',
      'esri/views/MapView'
    ]);

    const map = new Map({
      basemap: 'streets-navigation-vector'
    });

    new MapView({
      container: 'viewDiv',
      map: map,
      center: [-118.244, 34.052],
      zoom: 10
    });
  }


}
