import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ticket Dashboard';

  constructor(private route: Router) {
  }

  ngOnInit() {
    // this.route.navigate(['/ticketdashboard/login']);
  }


}
