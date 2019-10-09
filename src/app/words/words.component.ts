import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
  LIST_WORD_REMEMBERED = '';
  LIST_WORD_NOT_REMEMBERED = '';
  filterStatus = 'LIST_ALL';
  isShowForm = false; 
  newEnglish = '';
  newVietnamese = '';
  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
  ];
  constructor() { }

  ngOnInit() {
  }

  addWord(){
    this.arrWords.unshift({
      id: this.arrWords.length + 1, 
      en: this.newEnglish,
      vn: this.newVietnamese,
      memorized: false
    });
    this.newEnglish = '';
    this.newVietnamese = '';
    this.isShowForm = false;
  }  

   removeWord(id: number) {
    const index = this.arrWords.findIndex(word => word.id == id);
    this.arrWords.splice(index, 1);
   }

   getShowStatus(memorized: boolean){
    const conListAll = this.filterStatus === 'LIST_ALL';
    const conListRemembered = this.filterStatus === 'LIST_WORD_REMEMBERED' && memorized;
    const conListNotRemembered = this.filterStatus === 'LIST_WORD_NOT_REMEMBERED' && !memorized;
    return conListAll || conListRemembered || conListNotRemembered;
   }
}
 