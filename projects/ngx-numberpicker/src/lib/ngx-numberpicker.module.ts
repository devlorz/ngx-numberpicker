import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatInputModule } from '@angular/material';
import { NgxNumberpickerComponent } from './ngx-numberpicker.component';

@NgModule({
  declarations: [NgxNumberpickerComponent],
  imports: [MatButtonModule, MatIconModule, MatInputModule, ReactiveFormsModule],
  exports: [NgxNumberpickerComponent]
})
export class NgxNumberpickerModule {}
