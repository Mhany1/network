import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Iemployee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();


interface Data {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Departments: Data[] = [
    { value: 'IT', viewValue: 'IT' },
    { value: 'HR', viewValue: 'HR' },
    { value: 'Finance', viewValue: 'Finance' },
    { value: 'Development', viewValue: 'Development' }
  ];
  Experience: Data[] = [
    { value: '1', viewValue: 'Less than a year' },
    { value: '2', viewValue: 'From 1-3 years' },
    { value: '3', viewValue: '3 years or above' }
  ];
  filterationOptions: {
    name: string,
    date: string,
    department: string,
    salary: string,
    experience: string
  } = {
      name: '',
      date: '',
      department: '',
      salary: '',
      experience: ''
    }

  @ViewChild('datares') data!: ElementRef
  showd: boolean = true
  allData: Iemployee[] = []
  mainData: Iemployee[] = []
  namevalue: string = ''
  picker: any
  salaryvalue: any

  constructor(private employeeservice: EmployeeService) { }

  ngOnInit(): void {
    this.employeeservice.postData().subscribe(data => {
      this.allData = data
      console.log(this.allData);
    })
  }

  employeefilteration() {
    console.log(this.filterationOptions);
    this.filterationOptions = this.filterationOptions
    this.ngOnInit()
  }

  reset() {
    this.filterationOptions =
    {
      name: '',
      date: '',
      department: '',
      salary: '',
      experience: ''
    }
    this.ngOnInit
  }

  showData() {
    if (this.showd == true) {
      this.data.nativeElement.style.display = 'block'
      this.showd = false
    } else {
      this.data.nativeElement.style.display = 'none'
      this.showd = true
    }
  }
}
