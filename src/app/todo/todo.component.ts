import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
    form= new FormGroup({
      items: new FormArray([])
    });
    addItem(item: HTMLInputElement) {
      this.items.push(new FormControl(item.value))
      item.value="";
    }

    deleteItem(item) {
      let index = this.items.controls.indexOf(item);
      if(index > -1)
        this.items.removeAt(index);
    }

    get items() {
       return this.form.get("items") as FormArray;
  }
}
