import { Component } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html'
})

export class PersonInputComponent {
  constructor(private personsService: PersonsService){
    this.personsService = personsService;
  }
  personName = '';

  onPersonSaved() {
    this.personsService.savePerson(this.personName);
    this.personName = '';
  }
}
