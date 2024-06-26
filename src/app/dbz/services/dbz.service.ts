
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'krillin',
    power: 500
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9999
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  // onDeleteCharacterReceived(index: number): void {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter( character => character.id !== id );
  }

  onNewCharacterReceived(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character };

    this.characters.push(newCharacter);
  }

}
