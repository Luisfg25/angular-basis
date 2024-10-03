import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-add-character-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-character-form.component.html',
  styleUrl: './add-character-form.component.scss',
})
export class AddCharacterFormComponent {
  public emitCharacterEvent = output<Character>();

  public character: Character = {
    name: '',
    power: 20,
  };

  public emitCharacter(): void {
    if (this.character.name.length > 0) {
      this.emitCharacterEvent.emit(this.character);
      this.character = { name: '', power: 0 };
    }
  }
}
