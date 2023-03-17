import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { FormService } from "../services/form.service";

@Component({
  selector: "app-form",
  template: `
    <H1>Componente 1</H1>

    <form [formGroup]="form">
      <input formControlName="name" />
      <input formControlName="email" />
      <button (click)="submitForm()">Submit</button>
    </form>
  `,
})
export class FormComponent {
  form = this.fb.group({
    name: [""],
    email: [""],
  });

  constructor(private fb: FormBuilder, private formService: FormService) {}

  submitForm(): void {
    const formData = this.form.getRawValue();
    this.formService.setFormData(formData);
  }
}
