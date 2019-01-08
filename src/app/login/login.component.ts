import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formdata: FormGroup;
  constructor(private router: Router) {}
  invalidInputs = false;
  ngOnInit() {
    this.formdata = new FormGroup({
      userName: new FormControl("", Validators.compose([
          Validators.required,
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
        ])),
        userPassword: new FormControl("", Validators.compose([
          Validators.required,
    //Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),
    //Validators.minLength(8)
        ]))
    });
  }

  onClickSubmit(data) {
    console.log(data);
    if (data.userName == "admin@gmail.com" && data.userPassword == "Admin@123") {
      this.router.navigate(['/dashboard']);
      localStorage.setItem("loggedIn", "true");
      this.invalidInputs = false;
    } else {
      this.invalidInputs = true;
      this.formdata.reset();
      localStorage.setItem("loggedIn", "false");
    }
  }
}
