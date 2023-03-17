import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { FormActions } from "../actions/form.actions";
import { FormState } from "../reducer/form.reducer";

@Injectable({
  providedIn: "root",
})
export class FormService {
  constructor(private store: Store<{ form: FormState }>) {}

  setFormData(formData: any): void {
    this.store.dispatch(FormActions.setFormData({ formData }));
  }

  clearFormData(): void {
    this.store.dispatch(FormActions.clearFormData());
  }

  getFormData(): Observable<any> {
    return this.store.select((state) => state.form.formData);
  }
}
