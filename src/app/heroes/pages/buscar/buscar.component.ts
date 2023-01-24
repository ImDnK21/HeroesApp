import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent  implements OnInit{

  termino : string = ''
  heroes : Heroe[] = []

  heroeSeleccionado! : Heroe | undefined;

  constructor(private HeroesService : HeroesService) {
    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  buscando(){
    return this.HeroesService.getSugerencias(this.termino.trim())
    .subscribe(heroes => this.heroes = heroes)
  }

  ocpionSeleccionada(event : MatAutocompleteSelectedEvent ){

    if (!event.option.value) {
    this.heroeSeleccionado = undefined      
    return
    }

    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero 
    
    this.HeroesService.getHeroesPorId(heroe.id!)
    .subscribe(heroe => this.heroeSeleccionado = heroe)
  }


}
