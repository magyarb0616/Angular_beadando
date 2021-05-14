import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {AdatModel} from "./Model/AdatModel";

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  public adat: AdatModel[] = [];

  constructor(private http: HttpClient) {
}

   public fetch(): Observable<any> {
     return this.http.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=15&currency=HUF");
   }

    public index: number;
    transporter(adat: any): void{
      this.index = this.adat.indexOf(adat);
      console.log("in transporter function: index= "+this.index)
    }
}

