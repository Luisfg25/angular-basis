import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    { id: uuid(), name: 'Krilin', power: 500 },
    {
      id: uuid(),
      name: 'Goku',
      power: 9000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    },
  ];

  public addCharacter(recivedCharacter: Character) {
    this.characters = [
      ...this.characters,
      {
        ...recivedCharacter,
        id: uuid(),
      },
    ];
  }

  public deleteCharacterById(id: string): void {
    this.characters = this.characters.filter((data) => data.id !== id);
  }
}
