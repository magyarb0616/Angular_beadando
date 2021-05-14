import { Component, OnInit } from '@angular/core';
import {AdatModel} from "../Model/AdatModel";
import { MyServiceService } from '../my-service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  data = new AdatModel();

  constructor(private service: MyServiceService, private router: Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem("user"))
    this.router.navigate(['/Login'])
  }

  save(): void {
    this.service.adat.push(this.data);
    this.data = new AdatModel();
  }

}
