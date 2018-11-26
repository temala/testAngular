import { Component, OnInit } from '@angular/core';
import { getLocaleDayNames } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-week-table',
  templateUrl: './week-table.component.html',
  styleUrls: ['./week-table.component.sass']
})
export class WeekTableComponent implements OnInit {

  projects = [{Name:"INEAT ERP",KeyCode:65,Color:"#6ca3fc"},{Name:"INEAT Beat the code",KeyCode:90,Color:"#fc816c"}];

  days=[];
  selectedMonth = [];
  
  selectedProject = {};

  constructor() 
  { 
    this.ngOnInit();
  }

  getDaysArray(year, month)  {
    var daysInMonth = moment().daysInMonth();
  var arrDays = [];

  while(daysInMonth) {
    var current = moment().date(daysInMonth);
    arrDays.push(moment(current).format('dddd-DD'));
    daysInMonth--;
  }

  return arrDays.reverse();
  }

  ngOnInit() {
    this.days=this.getDaysArray(moment().year(),moment().month());
  }

}