import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard-table-view',
  templateUrl: './dashboard-table-view.component.html',
  styleUrls: ['./dashboard-table-view.component.css']
})

export class DashboardTableViewComponent implements OnInit {
  item: any;

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dataService.getDatafromJSON().subscribe(res => {
      this.item = res.find(d => d.id.toString() === id);
    });
  }
}
