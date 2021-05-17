import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  heroes:any[] = [];
  resultado:string;

  constructor(
    private activatedRoute:ActivatedRoute,
    private _heroesService:HeroesService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe ( params => {
      this.resultado = params ['name'];
    this.heroes = this._heroesService.buscarHeroes (params['name'])
    console.log(this.heroes);
    
    
      
    });
  }


}
