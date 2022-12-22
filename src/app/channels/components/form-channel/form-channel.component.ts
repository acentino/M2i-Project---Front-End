import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      channelName : [this.init.name, Validators.required],
      user:{ id :1},
      id : [this.init.id],
    });
  }
  onSubmit() {
    this.submitted.emit(this.form.value);
  }
}
