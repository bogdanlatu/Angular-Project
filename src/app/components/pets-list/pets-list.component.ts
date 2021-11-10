import { Component, OnInit, Input } from '@angular/core';
import { Pet } from '../../Pet';


@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit {
  @Input() pet!: Pet;

  constructor() { }

  ngOnInit(): void {
    
  }

}
