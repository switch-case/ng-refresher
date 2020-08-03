import { Component, OnInit } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit {
  personList: string[];

  constructor(private personsService: PersonsService) {
    this.personsService = personsService;
  }

  ngOnInit() {
    this.personList = this.personsService.getPersons();
    this.personsService.personsChanged.subscribe(persons => this.personList = persons);
  }

  ngOnDestroy() {
    this.personsService.personsChanged.unsubscribe();
  }

  removePerson(person: string) {
    this.personsService.removePerson(person);
  }
}
