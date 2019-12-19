import {Component, OnInit} from '@angular/core';
import {Human} from '../human';
import {Router} from '@angular/router';
import {HumanService} from '../human.service';

@Component({
  selector: 'app-list-human',
  templateUrl: './list-human.component.html',
  styleUrls: ['./list-human.component.scss']
})
export class ListHumanComponent implements OnInit {
  humanList;

  constructor(private router: Router,
              private humanService: HumanService) {
  }

  ngOnInit() {
    this.reloadList();
  }

  reloadList() {
    this.humanService.getHumanList().subscribe(data => {
      this.humanList = data.reverse();
    });
  }

  deleteHuman(id: string) {
    this.humanService.deleteHuman(id).then(res => {
      this.router.navigateByUrl('/');
    });
  }
}
