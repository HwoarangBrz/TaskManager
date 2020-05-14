import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[taskClosed]'
})
export class TaskClosedDirective implements OnInit {

  @Input() taskClosed: boolean;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    if (this.taskClosed) {
      this.el.nativeElement.style.textDecoration = 'line-through';
    }
  }

}
