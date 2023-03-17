import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div class="container">
      <app-form></app-form>
      <app-form-view></app-form-view>
    </div>
  `,
})
export class AppComponent {}
