import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    @HostBinding('class.open') isOpen = false;

    @HostListener('document:click', ['$event'])
    toggleOpen(eventdata: Event) {
        this.isOpen = this.elRef.nativeElement.contains(eventdata.target) ? !this.isOpen : false;
    }
    constructor(private elRef: ElementRef) { }
}