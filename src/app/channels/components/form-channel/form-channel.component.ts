import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Channel } from 'src/app/core/models/channel';
@Component({
  selector: 'app-form-channel',
  templateUrl: './form-channel.component.html',
  styleUrls: ['./form-channel.component.scss']
})
export class FormChannelComponent {
  @Input() public init! : Channel;
  @Output() public submitted : EventEmitter<Channel>;
  public form! : FormGroup;
  constructor(private formBuilder : FormBuilder) {
    this.submitted = new EventEmitter<Channel>();
  }
  ngOnInit() : void {

    this.form = this.formBuilder.group({
      name : [this.init.name, Validators.required],

    });
    this.form?.get('name')?.setValue('toto');

  }
  onSubmit() {
    this.submitted.emit(this.form.value);
  }

}
