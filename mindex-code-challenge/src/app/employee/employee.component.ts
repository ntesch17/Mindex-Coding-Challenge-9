import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import {Employee} from '../employee';
import {EmployeeService} from '../employee.service';
import {EmployeeDialogComponent} from '../employee-dialog/employee-dialog.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();
  employeesThatReport: Employee[] = [];

  constructor(private employeeService: EmployeeService, public dialog: MatDialog) {
  }

  // When component is intialization
  ngOnInit () : void {
    // If directReports exist, get the employee info for each.
    if (this.employee.directReports !== undefined) {
      this.employee.directReports.forEach((employeeId) => {
        this.employeeService.get(employeeId).subscribe(employ => this.employeesThatReport.push(employ));
      });
    }
  }

  // When edit button is pressed, emit edit to Employee List (Add Edit).
  editClick (employ) : void {
    const dialogRef = this.dialog.open(EmployeeDialogComponent, {
      width: '500px',
      data: {
        employee: employ,
        type: 'edit',
      },
    });

    dialogRef.afterClosed().subscribe((data) => {
      if (data !== undefined) {
        this.edit.emit(data);
      }
    });
  }

  // When delete button is pressed, emit delete to Employee List (Delete Employee).
  deleteClick (employ) : void {
    const dialogRef = this.dialog.open(EmployeeDialogComponent, {
      width: '500px',
      data: {
        employee: employ,
        type: 'delete',
      },
    });

    dialogRef.afterClosed().subscribe((data) => {
      if (data !== undefined) {
        this.delete.emit(employ);
      }
    });
  }
}