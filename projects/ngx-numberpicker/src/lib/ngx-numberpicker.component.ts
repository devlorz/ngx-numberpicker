import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'ngx-numberpicker',
  templateUrl: './ngx-numberpicker.component.html',
  styleUrls: ['./ngx-numberpicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxNumberpickerComponent),
      multi: true
    }
  ]
})
export class NgxNumberpickerComponent implements OnInit, ControlValueAccessor {
  decreaseButtonDisabled = false;
  increaseButtonDisabled = false;
  hintStartText = '';
  hintEndText = '';

  @Input() disabled = false;
  @Input() min = 0;
  @Input() max = 50;
  @Input() starttext: string;
  @Input() endtext: string;
  @Input() showDecimalPlaces = false;
  @Output() change = new EventEmitter();

  form: FormControl;

  constructor() {}

  ngOnInit(): void {
    this.form = this.showDecimalPlaces ? new FormControl('0.00') : new FormControl(0);
    this.setHintTexts();
    this.checkButtons();
  }

  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    if (val) {
      this.form.setValue(val, { emitEvent: false });
      this.checkButtons();
    }
  }

  registerOnChange(fn: any): void {
    this.form.valueChanges
      .pipe(
        map(value =>
          this.showDecimalPlaces ? +(Math.floor(+value * 100) / 100).toFixed(2) : +value
        ),
        tap(value => this.checkButtons())
      )
      .subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  increase(event: any): void {
    event.preventDefault();
    const value = +this.form.value;
    if (value < this.max) {
      const newValue = this.showDecimalPlaces
        ? ((Math.floor(value * 100) + 1) / 100).toFixed(2)
        : value + 1;
      this.setValue(newValue);
      this.change.emit(newValue);
    }
    this.checkButtons();
  }

  decrease(event: any): void {
    event.preventDefault();
    const value = +this.form.value;
    if (this.getValue() > this.min) {
      const newValue = this.showDecimalPlaces
        ? ((Math.floor(value * 100) - 1) / 100).toFixed(2)
        : value - 1;
      this.setValue(newValue);
      this.change.emit(newValue);
    }
    this.checkButtons();
  }

  checkButtons(): void {
    this.increaseButtonDisabled = false;
    this.decreaseButtonDisabled = this.getValue() <= this.min;
    const value = this.form.value;
    if (value >= this.max) {
      this.increaseButtonDisabled = true;
    }
  }

  setHintTexts(): void {
    this.setHintStartText(this.starttext);
    this.setHintEndText(this.endtext);
  }

  getValue(): number {
    return +this.form.value;
  }

  setValue(value: number | string): void {
    this.form.setValue(value);
  }

  setHintStartText(value: string): void {
    this.hintStartText = value;
  }

  setHintEndText(value: string): void {
    this.hintEndText = value;
  }
}
