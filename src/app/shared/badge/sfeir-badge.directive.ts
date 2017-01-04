import { Directive, ElementRef, Renderer, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[sfeir-badge]'
})
export class SfeirBadgeDirective implements OnInit {
    // private property to store person value
    private _person: any;

    /**
     * Component constructor
     */
    constructor(private _el: ElementRef, private _rd: Renderer) { }

    /**
     * Sets private property _person
     *
     * @param person
     */
    @Input() set person(person: any) {
        this._person = person;
    };

    /**
     * OnInit implementation
     */
    ngOnInit() {
        if(this._person && this._person.isManager) {
            this._rd.setElementProperty(this._el.nativeElement, 'innerHTML', '<i class="material-icons">supervisor_account</i>');
        }
    }
}
