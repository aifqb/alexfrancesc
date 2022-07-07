import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/picture.interfaces';
import { PicturesService } from 'src/app/services/pictures.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  productos: Producto[] = [];

  constructor( private productosServices: PicturesService ) { }

  ngOnInit(): void {
    this.productosServices.getProductos()
      .subscribe( productos => this.productos = productos );
  }
}
