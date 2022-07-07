import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/picture.interfaces';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() producto!: Producto;

}
