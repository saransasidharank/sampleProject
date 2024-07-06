import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  hobbies:string=""
  allEmployee:any=[
    {
      empId:100,empName:"saran",empSalary:45000
    },
    {
      empId:101,empName:"midhun",empSalary:55000
    },
    {
      empId:102,empName:"rithul",empSalary:75000
    },
    {
      empId:103,empName:"austeen",empSalary:35000
    }

  ]

  user:string=""

  constructor(private ds:DataService){
    this.user = this.ds.loginUsername

  }

}
