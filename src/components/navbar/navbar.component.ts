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
        icon: 'pi pi-book',
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
      },
      {
        label: 'Departments',
        icon: 'pi pi-building-columns',
        items: [
          {
            label: 'CSE',
            items: [
              {
                label: 'About CSE'
              },
              {
                label: 'Vision & Mission'
              },
              {
                label: 'Faculty'
              },
              {
                label: 'Laboratory Details'
              },
              {
                label: 'Department Activities'
              },
              {
                label: 'Downloads'
              },
              {
                label: 'Gallery'
              }
            ]
          },
          {
            label: 'ECE',
            items: [
              {
                label: 'About ECE'
              },
              {
                label: 'Vision & Mission'
              },
              {
                label: 'Faculty'
              },
              {
                label: 'Laboratory Details'
              },
              {
                label: 'Department Activities'
              },
              {
                label: 'Downloads'
              },
              {
                label: 'Gallery'
              }
            ]
          },
          {
            label: 'EEE',
            items: [
              {
                label: 'About EEE'
              },
              {
                label: 'Vision & Mission'
              },
              {
                label: 'Faculty'
              },
              {
                label: 'Laboratory Details'
              },
              {
                label: 'Department Activities'
              },
              {
                label: 'Downloads'
              },
              {
                label: 'Gallery'
              }
            ]
          },
          {
            label: 'H&S',
            items: [
              {
                label: 'About H&S'
              },
              {
                label: 'Vision & Mission'
              },
              {
                label: 'Faculty'
              },
              {
                label: 'Laboratory Details'
              },
              {
                label: 'Department Activities'
              },
              {
                label: 'Downloads'
              },
              {
                label: 'Gallery'
              }
            ]
          },

        ]
      },
    ]
  }

}
