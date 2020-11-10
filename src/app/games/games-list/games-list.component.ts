import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { Games } from '../games';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {

  listOfGames: Array<Games>;
  shallowCopy: Array<Games>;
  search: FormControl;
  toggleSort: boolean = false;

  constructor(private _gamesService: GamesService) { }

  ngOnInit(): void {
    this.search = new FormControl('');
    this.getGameList();

    this.searchByName();
  }

  getGameList() {
    this._gamesService.getGames().subscribe((res: any) => {
      this.listOfGames = res as Games[];
      this.shallowCopy = this.listOfGames;
      console.log('Result of list', this.listOfGames);

    });
  }

  searchByName() {
    this.search.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(searchText => {
      console.log('Search Text', searchText);
      let filtered = [];
      this.shallowCopy.filter(val => {
        let title = val.title.toString();
        if(title.includes(searchText)) {
          filtered.push(val);
        }
      })
      if(filtered.length > 0) {
        this.listOfGames = filtered;
      } else {
        this.listOfGames = this.shallowCopy;
      }
    });
  }

  sortScore() {
    this.toggleSort = !this.toggleSort;
    if(this.toggleSort)
    this.listOfGames.sort((a, b) => b.score - a.score);
    else 
    this.listOfGames.sort((a, b) => a.score - b.score);
  }



}
