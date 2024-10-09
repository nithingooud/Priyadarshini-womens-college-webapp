import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        route: '',
        icon: 'pi pi-home'
      },
      {
        label: 'About Us',
        icon: 'pi pi-search',
        items: [
          {
            label: 'About Priyadarshini',
            route: '/about',
          },
          {
            label: 'Core Executive Body',
            items: [
              {
                label: 'Chairman',
              },
              {
                label: 'Director',
              },
              {
                label: 'Principal',
              }
            ]
          },
          {
            label: 'Deans',
            items: [
              {
                label: 'Dean R&D',
              },
              {
                label: 'Dean Quality Management System',
              },
              {
                label: 'Dean Training & Placement',
              },
              {
                label: 'Dean Academics',
              },
              {
                label: 'Dean Student Affairs',
              }
            ]
          },
          {
            label: 'Service Rules'
          },
          {
            label: 'Governance',
            items: [
              {
                label: 'Governing Body',
              },
              {
                label: 'Academic Advisory Committee',
              },
            ]
          },
          {
            label: 'Code of Conduct',
            items: [
              {
                label: 'Teachers',
              },
              {
                label: 'Students',
              },
            ]
          },
        ]
      },
      {
        label: 'Academics',
        icon: 'pi pi-envelope',
        items: [
          {
            label: 'Courses Offered'
          },
          {
            label: 'Academic Committee'
          },
          {
            label: 'Academic Calendar '
          },
          {
            label: 'Committees'
          },
          {
            label: 'SC/ST welfare Committee'
          },
        ]
      }
    ]
  }

}
