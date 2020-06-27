import { Component, OnInit } from '@angular/core';
import { LiveService } from '../../../shared/service/live.service';
import { Live } from '../../../shared/model/live.model';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  livesPrevious: Live[];

  constructor(
    public liveService: LiveService
  ) { }

  ngOnInit(): void {
  }

  getLives(){
    this.liveService.getLivesWithFlag('previous').subscribe(data =>)
  }

}
