import { Component } from "@angular/core";
import { FormService } from "../services/form.service";

@Component({
  selector: "app-form-view",
  template: `
    <H1>Componente 2</H1>
    <div>Nome: {{ (formData$ | async).name }}, Email {{ (formData$ | async).email }}</div>
  `,
})
export class FormViewComponent {
  formData$ = this.formService.getFormData();

  constructor(private formService: FormService) {}
}
