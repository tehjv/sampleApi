import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample-api-calls';
  loginForm: FormGroup;
  hasErrored = false;
  isLoading = false;
  errorMessage = '';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, [Validators.required])
    });
  }

  submit() {
    this.isLoading = true;
    this.hasErrored = false;
    console.log('submitting...');
    console.log('form value: ', this.loginForm.value);
    this.apiService.getUsers().subscribe((users: any[]) => {
      console.log('api response:', users);
      const isValid = users.map(user => user.username).some(username => username === this.loginForm.value.username);
      if (isValid) {

        console.log('Logged in!');
      } else {
        this.errorMessage = 'Invalid Username!';
        this.hasErrored = true;
      }
      this.isLoading = false;
    });
  }
}
