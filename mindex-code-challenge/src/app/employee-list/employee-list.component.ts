import {Component, OnInit} from '@angular/core';

import {Employee} from '../employee';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  errorMessage: string;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.employeeService
      .getAll()
      .subscribe((emps) => this.employees = emps.sort((a, b) => a.firstName > b.firstName ? 1 : -1));
  }

  // Calls service to save edits for given employee.
  onEdit (employ) : void {
    this.employeeService.save(employ).subscribe();
  }

  // Calls service to remove employee from given database.
  onDelete (employ) : void {
    // Tell DB service to remove employee.
    this.employeeService.remove(employ).subscribe();
    
    //filter out removed employee from direct reports and overall list from the client-side.
    this.employees = this.employees
      .map((e) => {
        if (e.directReports !== undefined) {
          e.directReports = e.directReports?.filter((id) => id !== employ.id);

          // If directReports is empty, remove property entirely.
          if (e.directReports?.length < 1) {
            delete(e.directReports);
          }
        }

        return e;
      })
      .filter((e) => e.id !== employ.id);
  }

  private handleError(e: Error | any): string {
    console.error(e);
    return this.errorMessage = e.message || 'Unable to retrieve employees';
  }
}