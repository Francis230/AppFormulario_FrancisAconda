import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  formulario!: FormGroup;
  constructor(private fb: FormBuilder, private firestore: Firestore) {}
  // Los campos permitidos par llenr la informacion que se va a realizar 
  ngOnInit() {
    this.formulario = this.fb.group({
      nombre: [''],
      apellido: [''],
      email: [''],
      fechaNacimiento: [''],
      comida: [''],
      equiposfutbol: [[]],
      telefono: [''],
      cualidad: ['']
    });
  }
  // Accion de guardar la informacion registrada
  async guardar() {
    const datos = this.formulario.value;
    const ref = collection(this.firestore, 'formularios');
    await addDoc(ref, datos);
    // Alerta para poder notificar de que los datos se guardaron
    alert('Datos guardados correctamente');
    this.formulario.reset();
  }
}



