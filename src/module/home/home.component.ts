import { Component, OnInit } from '@angular/core';
import { ShareModule } from '../../app/shared/share/share.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [ShareModule],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
