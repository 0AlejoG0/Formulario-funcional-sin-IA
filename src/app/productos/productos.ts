import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.html',
  styleUrls: ['./productos.css']
})
export class ProductosComponent {
  productos: any[] = [];

  nuevoProducto = {
    nombre: '',
    descripcion: '',
    categoria: '',
    imagen: '',
    precio: 0
  };

  guardarProducto() {
    if (this.nuevoProducto.nombre && this.nuevoProducto.descripcion) {
      this.productos.push({ ...this.nuevoProducto });
      this.nuevoProducto = { nombre: '', descripcion: '', categoria: '', imagen: '', precio: 0 };
    }
  }

  eliminarProducto(index: number) {
    this.productos.splice(index, 1);
  }
}
