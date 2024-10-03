import { CommonModule } from '@angular/common';
import { Component, Input, output } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.scss',
})
export class CharactersListComponent {
  @Input()
  public charactersList: Character[] = [{ name: 'Trunks', power: 3000 }];

  public deleteCharacterEvent = output<string>();

  public deleteCharacter(id?: string): void {
    if (!id) {
      return;
    }
    this.deleteCharacterEvent.emit(id);
  }
}
