import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatButton } from '@angular/material/button';


@Component({
  selector: 'app-wiki-whale-details',
  imports: [NgIf, MatButton],
  templateUrl: './wiki-whale-details.component.html',
  styleUrl: './wiki-whale-details.component.scss'
})
export class WikiWhaleDetailsComponent implements OnInit {
  whale: any;

  whales = [
    { id: 1, name: "Blue Whale", imageUrl: "/images/wiki/blue-whale.jpg", description: "The largest animal on Earth, reaching up to 30 meters.", location: "Worldwide oceans", specifics: "Can weigh up to 200 tons." },
    { id: 2, name: "Orca (Killer Whale)", imageUrl: "/images/wiki/orca.jpg", description: "A highly intelligent predator known for hunting in pods.", location: "Cold and temperate waters", specifics: "Recognized by its black and white pattern." },
    { id: 3, name: "Humpback Whale", imageUrl: "/images/wiki/humpback-whale.jpg", description: "Known for its acrobatic breaches and complex songs.", location: "Tropical and polar oceans", specifics: "Males sing to attract mates." },
    { id: 4, name: "Sperm Whale", imageUrl: "/images/wiki/sperm-whale.jpeg", description: "Has the largest brain of any creature on Earth.", location: "Deep waters worldwide", specifics: "Can dive up to 2,000 meters deep." },
    { id: 5, name: "Gray Whale", imageUrl: "/images/wiki/gray-whale.jpg", description: "Famous for long migrations between feeding and breeding grounds.", location: "North Pacific Ocean", specifics: "Can travel over 20,000 km annually." },
    { id: 6, name: "Beluga Whale", imageUrl: "/images/wiki/beluga-whale.jpg", description: "A small, social white whale known for its vocal abilities.", location: "Arctic and sub-Arctic waters", specifics: "Often called the 'canary of the sea'." },
    { id: 7, name: "Narwhal", imageUrl: "/images/wiki/narwhal.jpg", description: "Famous for its long, spiral tusk.", location: "Arctic waters", specifics: "The tusk is actually an elongated tooth." }
  ];

  constructor(private route: ActivatedRoute, private location: Location) { }
  
  goBack() {
    this.location.back();
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.whale = this.whales.find(w => w.id === id);
  }
}
