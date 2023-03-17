import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from "@ngrx/store";
import { AppComponent } from "./app.component";
import { FormViewComponent } from "./component/form-view.component";
import { FormComponent } from "./component/form.component";
import { formReducer } from "./reducer/form.reducer";
import { FormService } from "./services/form.service";

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, StoreModule.forRoot({ form: formReducer })],
  declarations: [AppComponent, FormComponent, FormViewComponent],
  providers: [FormService],
  bootstrap: [AppComponent],
})
export class AppModule {}
