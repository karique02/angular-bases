import { Component } from '@angular/core';

@Component({
  selector: 'app-app-heroes-list',
  templateUrl: './app-heroes-list.component.html',
  styleUrl: './app-heroes-list.component.css'
})
export class AppHeroesListComponent {

  public heroNames: string[] = ["Spiderman","Ironman","Hulk","Thor"];
  public deletedHero?: string;

  public removeLastHero(): void  {
    this.deletedHero = this.heroNames.pop();
  }
}
