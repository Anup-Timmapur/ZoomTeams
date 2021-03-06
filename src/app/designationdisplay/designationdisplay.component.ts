import { Component, OnInit } from '@angular/core';
import { Designation } from './designation';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';
import { DesignationdataService } from '../designationdata.service';

@Component({

selector: 'app-designationdisplay',
templateUrl: './designationdisplay.component.html',
styleUrls: ['./designationdisplay.component.css']
})
export class DesignationdisplayComponent implements OnInit {
// inject modalService
constructor(private modalService: NgbModal,private _data:DesignationdataService) { }
updatedItem: number;
title = 'Designations';
closeResult: string;
selectedDesignationOption: string;
name: string;
msg = 'Are You Sure!';
description:string;

arrDesig: Designation[]=[];
editId:number;
editName:string;
editDescription:string;


ngOnInit() {
  this._data.getDesignations().subscribe(
    (data:Designation[])=>{
      this.arrDesig=data;
    }
    );
    console.log(this.arrDesig);
}

onSearch(value) {

console.log(value);
if (value != '') {
this.arrDesig = this.arrDesig.filter(x => x.Name.startsWith(value));
}
this.ngOnInit();
}

// Add modal
openAdd(content, passedTitle) {
this.selectedDesignationOption = passedTitle;
this.name = '';
this.description = '';
this.modalService.open(content);
}

// Edit modal popup
openEdit(content, passedTitle, i) {
console.log(content);
this.selectedDesignationOption = passedTitle;
// console.log(i);
this.name = this.arrDesig[i].Name;
this.description = this.arrDesig[i].Description;
// console.log('updating');
this.updatedItem = i;
this.modalService.open(content);
}


// delete
onDesigDelete(desig) {
console.log(desig);
if (confirm(this.msg) === true) {
this.arrDesig.splice(this.arrDesig.indexOf(desig), 1);
}

}

onFormSubmit(f) {
if (this.selectedDesignationOption == 'Add') {
// console.log(this.name);
// this.arrDesig.push();
// } else {
// let data = this.updatedItem;
// console.log(data);
// alert(this.arrDesig.length);
// for (let i = 0; i < this.arrDesig.length; i++) {
// if (i == data) {
// this.arrDesig[i].Name = this.name;
// this.arrDesig[i].Description = this.description ;
// console.log(this.arrDesig);

// // To initialize the fields with empty data
// this.name = '';
// this.description = '';
// }
// }
this._data.addDesignation(f.value).subscribe((data: any) => {
  console.log(f.value);
  alert("record added");
});


}
this.modalService.dismissAll();
}
}
