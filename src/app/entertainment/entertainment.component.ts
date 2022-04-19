import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  constructor(private _entertainment:NewsapiservicesService) { }
  entertainmentNewsDisplay: any=[];

  ngOnInit(): void {
    this._entertainment.entertainmentNews().subscribe((result)=>{
      this.entertainmentNewsDisplay = result.articles;
    })
  }

}
