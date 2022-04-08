import { Component } from '@angular/core';
import { Employee } from './models/employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  employeeArray: Employee[] = [
    {id: 1, name: "David", country: "España"},
    {id: 2, name: "DAW2", country: "India"},
    {id: 3, name: "Cristina", country: "USA"},
    {id: 4, name: "Claire", country: "Canadá"},
  ];

  selectedEmployee: Employee = new Employee();

  addOrEdit() {
    if(this.selectedEmployee.id === 0) {
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
    }

    this.selectedEmployee = new Employee();
  }

  openEdit(employee: Employee) {
    this.selectedEmployee = employee;
  }

  delete() {
    if(confirm('¿Estás seguro de eliminar el empleado?'))
    this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
    this.selectedEmployee = new Employee();
  }
}
