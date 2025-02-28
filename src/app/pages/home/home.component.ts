import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BasicButtonComponent } from '../../components/shared/basic-button/basic-button.component';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, MatButtonModule, MatDividerModule, MatIcon, NgFor, RouterModule, NgClass, NgIf, BasicButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  currentIndex = 0;
  isHovered = false;

  whaleCards = [
  {
    title: 'The Threat of Fishing Nets',
    description: 'Fishing nets are one of the main threats to whales.',
    statistic: '80% of whales are affected by plastic pollution.',
    imageUrl: '/images/whale-img/whale-net.jpg'
  },
  {
    title: 'Whaling',
    description: 'Whaling remains a major issue, despite being banned in several countries.',
    statistic: 'Fewer than 10,000 whales are still victims of whaling each year.',
    imageUrl: '/images/whale-img/whale-baby.jpg'
  },
  {
    title: 'Climate Change',
    description: 'Warming oceans disrupt whale migrations.',
    statistic: 'More than 30% of whale species are threatened by climate change.',
    imageUrl: '/images/whale-img/whale-back.jpg'
  },
  {
    title: 'Noise Pollution',
    description: 'Human noise disrupts whale communication, affecting their reproduction.',
    statistic: 'Noise pollution has doubled over the past 50 years.',
    imageUrl: '/images/whale-img/whale-noise.jpg'
  },
  {
    title: 'Loss of Marine Habitat',
    description: 'The degradation of marine habitats due to human activity affects whales.',
    statistic: '60% of marine habitats have been disrupted by human activities.',
    imageUrl: '/images/whale-img/whale-habitat.png'
  },
  {
    title: 'Protecting Whales',
    description: 'International initiatives aim to preserve whales and their habitats.',
    statistic: 'Protection programs have increased whale populations by 20%.',
    imageUrl: '/images/whale-img/whale-program-protect.jpg'
  }];

  appGoals = [
    { icon: 'eco', title: 'Education', description: 'Raise awareness of whale conservation and the impact of humans on whale migration.' },
    { icon: 'public', title: 'Collaboration', description: 'Send notifications to boat operators informing them that they are returning to areas where cetaceans can be encountered' },
    { icon: 'trending_up', title: 'Follow Up', description: 'Follow the impact of the actions to improve efforts.' },
    { icon: 'shield', title: 'Protection', description: 'Implement concrete measures to protect whales.' }
  ];

  features = [
    { title: 'Ocean Map', imageUrl: '/images/feature/ocean_map_feature.png', description: 'Search whale world position with different filters.', link: '/map' },
    { title: 'Migration Tracking', imageUrl: '/images/feature/ocean_map_feature.png', description: 'Track current migrations near my geo-localization.', link: '/migration' },
    { title: 'Whales Wiki', imageUrl: '/images/feature/wiki_feature.png', description: 'Get information of current tracked whales.', link: '/wiki' },
    { title: 'Warning Notification', imageUrl: '/images/feature/wiki_feature.png', description: 'Receive alert and warnings of dangerous zones in real time.', link: '/map' }
  ];

  marineOrgs = [
    {
      name: 'Sea Shepherd',
      description: 'An international marine conservation organization fighting illegal poaching and protecting marine wildlife.',
      imageUrl: 'images/orgs/sea-shepherd.png',
      website: 'https://seashepherd.org'
    },
    {
      name: 'WWF',
      description: 'WWF works to preserve oceans, protect marine species, and promote sustainable fishing practices.',
      imageUrl: 'images/orgs/wwf-logo.png',
      website: 'https://www.wwf.org'
    },
    {
      name: 'Greenpeace',
      description: 'Greenpeace defends the oceans against pollution, overfishing, and climate change.',
      imageUrl: 'images/orgs/greenpeace.png',
      website: 'https://www.greenpeace.org'
    }
  ];

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.marineOrgs.length) % this.marineOrgs.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.marineOrgs.length;
  }

  getCardClass(index: number): string {
    const row = Math.floor(index / 2);
    
    return (row % 2 === 0) ? (index % 2 === 0 ? 'blue-card' : '') : (index % 2 !== 0 ? 'blue-card' : '');
  }

  openLink(url: string): void {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
