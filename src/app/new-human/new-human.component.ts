import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {HumanService} from '../human.service';

@Component({
  selector: 'app-new-human',
  templateUrl: './new-human.component.html',
  styleUrls: ['./new-human.component.scss']
})
export class NewHumanComponent implements OnInit {
  humanForm: FormGroup;

  constructor(private router: Router,
              private humanService: HumanService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.humanForm = this.fb.group({
      id: [''],
      name: ['']
    });
  }

  onSubmit() {
    this.humanService.createHuman(this.humanForm.value).then(res => {
      this.router.navigateByUrl('/');
    });
  }
}
