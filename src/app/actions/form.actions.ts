import { createAction, props } from "@ngrx/store";

export const FormActions = {
  setFormData: createAction("[Form] Set Form Data", props<{ formData: any }>()),
  clearFormData: createAction("[Form] Clear Form Data"),
};
