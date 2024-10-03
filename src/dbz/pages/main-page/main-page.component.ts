import { Component, inject } from '@angular/core';
import { AddCharacterFormComponent } from '../../components/add-characters-form/add-character-form.component';
import { CharactersListComponent } from '../../components/characters-list/characters-list.component';
import { Character } from '../../interfaces/character';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CharactersListComponent, AddCharacterFormComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  private _dbzService = inject(DbzService);

  public get characters(): Character[] {
    return [...this._dbzService.characters];
  }

  ondDeleteCharacter(id: string) {
    this._dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character) {
    this._dbzService.addCharacter(character);
  }
}
