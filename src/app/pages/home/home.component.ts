import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, MatButtonModule, MatDividerModule, MatIcon, NgFor, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  whaleCards = [
  {
    title: 'The Threat of Fishing Nets',
    description: 'Fishing nets are one of the main threats to whales.',
    statistic: '80% of whales are affected by plastic pollution.'
  },
  {
    title: 'Whaling',
    description: 'Whaling remains a major issue, despite being banned in several countries.',
    statistic: 'Fewer than 10,000 whales are still victims of whaling each year.'
  },
  {
    title: 'Climate Change',
    description: 'Warming oceans disrupt whale migrations.',
    statistic: 'More than 30% of whale species are threatened by climate change.'
  },
  {
    title: 'Noise Pollution',
    description: 'Human noise disrupts whale communication, affecting their reproduction.',
    statistic: 'Noise pollution has doubled over the past 50 years.'
  },
  {
    title: 'Loss of Marine Habitat',
    description: 'The degradation of marine habitats due to human activity affects whales.',
    statistic: '60% of marine habitats have been disrupted by human activities.'
  },
  {
    title: 'Protecting Whales',
    description: 'International initiatives aim to preserve whales and their habitats.',
    statistic: 'Protection programs have increased whale populations by 20%.'
  }];

  appGoals = [
    { icon: 'eco', title: 'Education', description: 'Raise awareness of whale conservation and the impact of humans on whale migration.' },
    { icon: 'public', title: 'Collaboration', description: 'Send notifications to boat operators informing them that they are returning to areas where cetaceans can be encountered' },
    { icon: 'trending_up', title: 'Follow Up', description: 'Follow the impact of the actions to improve efforts.' },
    { icon: 'shield', title: 'Protection', description: 'Implement concrete measures to protect whales.' }
  ];

  features = [
    { title: 'Ocean Map', description: 'Search whale world position with different filters.', link: '/map' },
    { title: 'Migration Tracking', description: 'Track current migrations near my geo-localization.', link: '/map' },
    { title: 'Warning Notification', description: 'Receive alert and warnings of dangerous zones in real time.', link: '/map' }
  ];
}
