import { Component, OnInit } from '@angular/core';
import { TestService } from '../../shared/';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TestService]
})
export class HomeComponent implements OnInit {

  data: any[] = [];
  constructor(private testService: TestService) { }

  ngOnInit() {
    this.testService.getAll().subscribe((res: any) => {

      this.data = res;

    });
  }

}
