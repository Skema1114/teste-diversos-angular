import { createReducer, on } from "@ngrx/store";
import { FormActions } from "../actions/form.actions";

export interface FormState {
  formData: any;
}

export const initialState: FormState = {
  formData: null,
};

export const formReducer = createReducer(
  initialState,
  on(FormActions.setFormData, (state, { formData }) => ({ ...state, formData })),
  on(FormActions.clearFormData, (state) => ({ ...state, formData: null }))
);
