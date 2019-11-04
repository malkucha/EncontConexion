import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  pages = [
    {
      title: 'Mensajes',
      url: '/mensajes',
      descripcion: 'Mensajes.'
    },
    {
      title: 'Login',
      url: '/login',
      descripcion: '¿Ya tenés usuario?'
    },
    {
      title: 'Sobre Nosotros',
      url: '/about',
      descripcion: 'A cerca de nosotros...'
    },
    {
      title: 'Términos y condiciones',
      url: '/terminos',
      descripcion: 'Términos y condiciones.'
    }
  ];

  selectedPath = '';

  constructor(private router: Router) {
    this.router.events.subscribe( (event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    })
  }

  ngOnInit() {
  }

}
