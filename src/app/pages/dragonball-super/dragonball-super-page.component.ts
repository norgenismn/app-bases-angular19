import { Component, inject } from "@angular/core";
import { CaracterListComponent } from "../../components/dragonball/caracter-list/caracter-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { DragonballService } from "../../services/dragonball.service";

@Component({
  selector: 'dragonball-super',
  templateUrl: './dragonball-super-page.component.html',
  imports: [CaracterListComponent, CharacterAddComponent],
})
export class DragonballSuperPageComponent {
  public dragonballService = inject(DragonballService);
}
