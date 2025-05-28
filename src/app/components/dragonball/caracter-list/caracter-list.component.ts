import { Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/caracter.inteface';

@Component({
  selector: 'dragonballl-caracter-list',
  templateUrl: './caracter-list.component.html',
})
export class CaracterListComponent {
  characters = input.required<Character[]>();
  listName = input.required<string>();
}