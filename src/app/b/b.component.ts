import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { AComponent } from '../a/a.component';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit, AfterViewInit {
  @Input() text: string;

  constructor(private parent: AComponent) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.parent.name = 'Updated text';
  }
}
