
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
@IonicPage()
@Component({
  selector: 'test-page',
  templateUrl: 'test.html',
})
export class TestPage {
  validations_form: FormGroup;

  constructor(public navCtrl: NavController, private fb: FormBuilder) {

    this.validations_form = this.fb.group({
      motorcycles: this.fb.array([
        this.getInitialMotorcycle()
      ])
    });
  }

  getInitialMotorcycle() {
    return this.fb.group({
      color: [''],
      year: [''],
      make: [''],
      model: [''],
      currentMileage: [''],
    });
  }

  addMotorcycle() {
    const control = <FormArray>this.validations_form.controls['motorcycles'];
    control.push(this.getInitialMotorcycle());
  }

  removeMotorcycle(i: number) {
    const control = <FormArray>this.validations_form.controls['motorcycles'];
    control.removeAt(i);
  }

}