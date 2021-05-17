import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() index:number;

  @Output() heroeSelection: EventEmitter<number>;

  constructor(
    private router:Router
  ) { 
    this.heroeSelection=new EventEmitter();
  }

  ngOnInit(): void {
  }
  verHeroe() {
    console.log(this.index);
    this.router.navigate(['/heroe',this.index])
   /*  this.heroeSelection.emit ( this.index); */
    
  }
}
