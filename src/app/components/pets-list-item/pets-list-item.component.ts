import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetService } from '../../services/pet.service';
import { Pet } from '../../Pet';

@Component({
  selector: 'app-pets-list-item',
  templateUrl: './pets-list-item.component.html',
  styleUrls: ['./pets-list-item.component.css']
})
export class PetsListItemComponent implements OnInit {
  pet: Pet = {
    category : [],
    id : 0,
    name : "",
    photoUrls : [],
    status : "",
    tags : []
  };

  constructor(private route: ActivatedRoute, private petService: PetService) { }

  

  ngOnInit(): void {
    //console.log("the id for this page is: ",this.route.snapshot.paramMap.get('id'));
    const pageId = this.route.snapshot.paramMap.get('id');
    console.log(pageId);
    this.petService.getPetById(Number(pageId)).subscribe((pet) => 
      this.pet = JSON.parse(JSON.stringify(pet))
    );
  }

}
