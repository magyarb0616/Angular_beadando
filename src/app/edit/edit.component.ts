import { Component, OnInit } from '@angular/core';
import {AdatModel} from "../Model/AdatModel";
import { MyServiceService } from '../my-service.service';
import {ListComponent} from "../list/list.component";


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  data = new AdatModel();

  constructor(private service: MyServiceService,
              private listC: ListComponent) { }

  ngOnInit(): void {
    this.data = this.service.adat[this.service.index];
    console.log("index in edit component: ",this.service.index)
  }

  save(): void {
    this.data = this.service.adat[this.service.index];
  }


}
