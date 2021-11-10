import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet.service';
import { Pet } from '../../Pet';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  pets: Pet[] = [];

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    /* this.petService.getPetsByStatus("available").subscribe((pets) =>
      {this.pets = pets
        console.log(this.pets);
      }
    ); */
  }

  getPetsByStatus(status: string) {
    this.petService.getPetsByStatus(status).subscribe((pets) =>
      {this.pets = pets
        console.log(this.pets);
      }
    );
  }

}
