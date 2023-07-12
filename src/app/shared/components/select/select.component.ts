import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() title: string = "";
  @Input() data: any[] = [];
  @Output() selectedValue = new EventEmitter();
  @Input() select="";
  @Input() all:boolean=true;
  constructor() {

  }

  ngOnInit(): void {

  }

  detectChanges(event: any) {
this.selectedValue.emit(event)
  }

}
