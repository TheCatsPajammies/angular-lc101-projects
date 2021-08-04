import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ["1", "2", "3"];
   finishedChores = ["1", "2", "3", "4", "5", "6"];

   targetImage = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';

   constructor() { }

   ngOnInit() {
   }

}
/*
<div>
   <h3>Prep Work</h3>
   <ul>
      <li *ngFor = "let task of prepWork">{{task}}</li>
   </ul>
</div>

<ng-template #noHW>
   <p>This space intentionally left blank.</p>
</ng-template>

Assume we have defined a prepWork array to hold the homework tasks for our next class. We want the web page to always show the heading. Underneath that we want to add either the list of tasks or the paragraph text if the array is empty.

Where should we place an *ngIf statement to make this happen?

In the p tag


For the same code sample, which of the following shows the correct syntax for the *ngIf statement?

*ngIf = "prepWork.length === 0; else noHW"

*/