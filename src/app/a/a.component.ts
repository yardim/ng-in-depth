import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {
  name = 'I am na A component!';
  text = 'Message for child';

  constructor() { }

  ngOnInit() { }
}
