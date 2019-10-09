import{ Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `<button (click)="addForParent();">Add</button>`
})

export class ChildComponent{
    @Output() click = new EventEmitter();

    addForParent(){
        this.click.emit();
    }
}