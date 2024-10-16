
import { Component, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GalleriaModule, CardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public images: any[] | undefined = ['https://res.cloudinary.com/nithinmanda/image/upload/v1729005314/priyadarshini-1_qxqm0x.jpg',
    'https://res.cloudinary.com/nithinmanda/image/upload/v1729005313/priya-3_rycdjz.jpg',
    'https://res.cloudinary.com/nithinmanda/image/upload/v1729005313/priya-2_eetm5r.jpg', 'https://res.cloudinary.com/nithinmanda/image/upload/v1729005313/priya-4_nggmgt.jpg'];
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

  constructor() { }

  ngOnInit() {

  }
}
