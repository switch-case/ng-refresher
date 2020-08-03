import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PersonsService {
  personsChanged = new Subject<string[]>();
  private persons = [ 'Brandie', 'Elba', 'Murphy'];

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
