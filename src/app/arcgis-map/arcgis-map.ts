import { AfterViewInit, Component, OnInit } from '@angular/core';

// @ts-ignore to silence VS Code errors
import Map from '@arcgis/core/Map';
// @ts-ignore
import MapView from '@arcgis/core/views/MapView';

@Component({
  selector: 'app-arcgis-map',
  standalone: true,
  template: '<div id="mapViewDiv" style="height:100vh; width:100%;"></div>',
  styleUrls: ['./arcgis-map.css']
})
export class ArcgisMap implements AfterViewInit {

  constructor(){
    console.log('in the contructor...');
  }

 ngAfterViewInit() {
    const map = new Map({ basemap: 'streets-navigation-vector' });
    new MapView({ container: 'mapViewDiv', map, center: [-118.244, 34.052], zoom: 10 });
  }
}
