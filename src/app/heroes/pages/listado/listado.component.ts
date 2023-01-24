import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';
import { RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent {

  heroes : Heroe[] = [];

  constructor(private heroesService : HeroesService) {
    
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.heroesService.getHeroes()
    .subscribe(heroes => { this.heroes = heroes})

  }
}
