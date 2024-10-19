
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DataViewModule, TagModule, GalleriaModule, CommonModule, DividerModule, CardModule, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public images: any[] | undefined = [
    'https://res.cloudinary.com/nithinmanda/image/upload/v1729005313/priya-3_rycdjz.jpg',
    'https://res.cloudinary.com/nithinmanda/image/upload/v1729005313/priya-2_eetm5r.jpg'];
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 4
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  public marqueeImages = [
    { src: 'https://commercetools.com/img/containers/assets/partners/partner-logo-new/partner-overview-769x537px-accenture.png/9fc2535d44cd757028c3f22787a585ce.png?v4', alt: 'Image 2' },
    { src: 'https://www.cliniindia.com/wp-content/uploads/2024/03/TCS-logo-300x121-1.webp', alt: 'Image 3' },
    { src: 'https://download.logo.wine/logo/Capgemini/Capgemini-Logo.wine.png', alt: 'Image 3' },
    { src: 'https://static.vecteezy.com/system/resources/previews/014/018/563/non_2x/amazon-logo-on-transparent-background-free-vector.jpg', alt: 'Image 3' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAegjqgcY5-rErLQQDSqAPTpCgSsrTtR1KLA&s', alt: 'Image 1' },
    { src: 'https://logos-world.net/wp-content/uploads/2023/03/Cognizant-Logo.png', alt: 'Image 1' },
  ];
  @ViewChild('marqueeContent') marqueeContent!: ElementRef;

  public products = [{ name: 'Dr. Katepalli Naveen Babu', designation: 'Chairman', image: 'https://res.cloudinary.com/nithinmanda/image/upload/v1729311694/chairman_mdwo2t.jpg' },
  { name: 'Sri A. Venkata Ramana', designation: 'Director', image: 'https://res.cloudinary.com/nithinmanda/image/upload/v1729311876/director_rzmtmk.jpg' }, { name: 'Dr. B. Gopal', designation: 'Principal', image: 'https://res.cloudinary.com/nithinmanda/image/upload/v1729311876/principal_arluu1.jpg' }];

  announcements: { message: string }[] = [
    { message: 'Semester break starts on October 20th.' },
    { message: 'Project submissions due by November 5th.' },
    { message: 'College fest is on December 10th.' },
    { message: 'The library is open 24x7 from October.' }
  ];

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    const content = this.marqueeContent.nativeElement;
    const scrollWidth = content.scrollWidth;
    content.style.animationDuration = `${scrollWidth / 50}s`;
  }
}
