import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public service: MyServiceService, private router: Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem("user")){
      this.router.navigate(['/Login'])
    } else {
          if (this.service.adat.length === 0) {
              this.service.fetch().subscribe({
                  next:(data: any) => (console.log('Start'),this.service.adat = data.coins),
                  error: error => console.log('An error has occurred: '+error),
                  complete: () => (console.log(this.service.adat), console.log('Done!'))
                }
              );
          }
        }
  }

  delete(adat: any): void{
    this.service.adat.splice(this.service.adat.indexOf(adat),1);
  }




}
