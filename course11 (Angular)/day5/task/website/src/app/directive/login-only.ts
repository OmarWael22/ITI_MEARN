import { Directive, ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[AutoFocusDirective]',
  standalone: true
})
export class AutoFocusDirective {
  // inject()
  // ele => p



  constructor(private ele: ElementRef) {}
     ngAfterViewInit() {
    const element = this.ele.nativeElement;
    if (element && element.focus) {
      element.focus();
    }
  }
}
