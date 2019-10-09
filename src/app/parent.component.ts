 import{ Component } from '@angular/core';

@Component({    
    selector: 'app-parent',
    template: `
    <h3>{{ value }}</h3> 
    <app-child (click)="changeValue();"></app-child>
    `    
})

export class ParentComponent{ 
    value = 0;
    
    changeValue(){        
        console.log(this.value + " Num a");        
        this.value = this.value + 0.5;     
        console.log(this.value + " Num b");
    }
}