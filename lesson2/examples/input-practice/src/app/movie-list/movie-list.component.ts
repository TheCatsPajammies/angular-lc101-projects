import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }
   //  functions go here in between ngInInit()
   addMovie (newTitle: string) {
      if (newTitle === "") {
         alert("Fill out the dang form!"); // Bonus mission to prevent empty string.
      } else if(!this.movies.includes(newTitle)){
         this.movies.push(newTitle);
      }
   }

}

/*


!!! Throws alert if duplicate!!!
   addMovie (newTitle: string) {
      if(this.movies.includes(newTitle)){
         alert("No duplicates!");
      } else if (!this.movies.includes(newTitle)) {
         this.movies.push(newTitle);
      }
   }


*/