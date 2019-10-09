import{ Component } from '@angular/core';

@Component({
    templateUrl: './word.component.html',
    selector: 'app-word',// như 1 html tag
    // styles có `` --> sử dụng mảng
    styles: [`
        h3{
            color: red;
            text-align: center;
            font-size: 30px;        
        }
        p{
            color: red;
            text-align: center;
            font-size: 30px;
        }
    `]

})

export class WordComponent{
    en: String = 'Hello';
    vn: String = 'Xin Chao';
    imageURL='https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
    forgot = false;
    //// khi có dấu [] thì nó hiểu đây là 1 giá trị, 1 biến ở trong class này, attribute thuộc lớp này
    toggleForgot(){
        this.forgot =! this.forgot;
    }
}