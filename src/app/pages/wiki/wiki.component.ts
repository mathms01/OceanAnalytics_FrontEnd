import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Router } from '@angular/router';




@Component({
  selector: 'app-wiki',
  imports: [MatGridListModule, NgFor, NgIf],
  templateUrl: './wiki.component.html',
  styleUrl: './wiki.component.scss'
})
export class WikiComponent {
  constructor(private router: Router) { }
  hoveredWhale: string | null = null;
  cols: number = 3;

  whales = [
    { 
      id: 1, 
      name: "Blue Whale", 
      imageUrl: "/images/wiki/blue-whale.jpg",
      description: "The largest animal on Earth, reaching up to 30 meters.",
      location: "Worldwide oceans",
      specifics: "Can weigh up to 200 tons.",
      colSpan: 1, rowSpan: 1
    },
    { 
      id: 2, 
      name: "Orca (Killer Whale)", 
      imageUrl: "/images/wiki/orca.jpg",
      description: "A highly intelligent predator known for hunting in pods.",
      location: "Cold and temperate waters",
      specifics: "Recognized by its black and white pattern.",
      colSpan: 1, rowSpan: 1
    },
    { 
      id: 3, 
      name: "Humpback Whale", 
      imageUrl: "/images/wiki/humpback-whale.jpg",
      description: "Known for its acrobatic breaches and complex songs.",
      location: "Tropical and polar oceans",
      specifics: "Males sing to attract mates.",
      colSpan: 1, rowSpan: 1
    },
    { 
      id: 4, 
      name: "Sperm Whale", 
      imageUrl: "/images/wiki/sperm-whale.jpeg",
      description: "Has the largest brain of any creature on Earth.",
      location: "Deep waters worldwide",
      specifics: "Can dive up to 2,000 meters deep.",
      colSpan: 1, rowSpan: 1
    },
    { 
      id: 5, 
      name: "Gray Whale", 
      imageUrl: "/images/wiki/gray-whale.jpg",
      description: "Famous for long migrations between feeding and breeding grounds.",
      location: "North Pacific Ocean",
      specifics: "Can travel over 20,000 km annually.",
      colSpan: 1, rowSpan: 1 
    },
    { 
      id: 6, 
      name: "Beluga Whale", 
      imageUrl: "/images/wiki/beluga-whale.jpg",
      description: "A small, social white whale known for its vocal abilities.",
      location: "Arctic and sub-Arctic waters",
      specifics: "Often called the 'canary of the sea'.",
      colSpan: 1, rowSpan: 1 
    },
    { 
      id: 7, 
      name: "Narwhal", 
      imageUrl: "/images/wiki/narwhal.jpg",
      description: "Famous for its long, spiral tusk.",
      location: "Arctic waters",
      specifics: "The tusk is actually an elongated tooth.",
      colSpan: 1, rowSpan: 1
    }
  ];

  goToDetails(whale: any) {
    this.router.navigate(['/whale-details', whale.id]);
  }
}
