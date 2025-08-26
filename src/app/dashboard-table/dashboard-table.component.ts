import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.css']
})
export class DashboardTableComponent implements OnInit {
  data: any[] = [];
  headers: string[] = [];
  editing: { [key: number]: boolean } = {};

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.getDatafromJSON().subscribe(res => {
      this.data = res;
      if (res.length > 0) {
        this.headers = Object.keys(res[0]);
      }
    });
  }

  goToDetails(item: any): void {
    debugger;
    this.router.navigate(['/details', item.id]);
  }

  toggleEdit(index: number): void {
    this.editing[index] = !this.editing[index];
  }
}
