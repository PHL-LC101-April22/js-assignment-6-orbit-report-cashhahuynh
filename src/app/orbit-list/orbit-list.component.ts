import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';
//import { AppComponent } from '../app.component'; //importing class...how to call?...

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})

export class OrbitListComponent implements OnInit {

  @Input() satellites: Satellite[];
  constructor() { }

  ngOnInit() {
  }

	sort(column: string): void {
		// array.sort modifies the array, sorting the items based on the given compare function
		this.satellites.sort(function (a: Satellite, b: Satellite): number {
			if (a[column] < b[column]) {
				return -1;
			} else if (a[column] > b[column]) {
				return 1;
			}
			return 0;
		});
	}

}
