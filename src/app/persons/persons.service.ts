import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PersonsService {
  personsChanged = new Subject<string[]>();
  private peopleFetched = false;
  private persons = [];

  constructor(private http: HttpClient){ }

  fetchPersons() {
    this.http
      .get<any>('https://swapi.dev/api/people/')
      .pipe(map(response => response.results.map(result => result.name)))
      .subscribe(people => this.personsChanged.next(people));
  }
  getPersons() {
    return this.persons;
  }

  savePerson(name: string) {
    this.persons.push(name);
    this.personsChanged.next(this.persons);
  }

  removePerson(name: string) {
    this.persons = this.persons.filter(person => person !== name);
    this.personsChanged.next(this.persons);
  }
}
