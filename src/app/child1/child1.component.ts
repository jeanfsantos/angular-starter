import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
})
export class Child1Component {
  @Output() submit = new EventEmitter<string>;
  item = ''

  onSave() {
    this.submit.emit(this.item);
  }
}
