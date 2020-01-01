import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatTabsModule,
    Material.MatInputModule,
    Material.MatFormFieldModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatSelectModule,
    Material.MatRadioModule,
    Material.MatCardModule,
    Material.MatButtonModule,
    Material.MatIconModule,
    Material.MatProgressBarModule
  ],
  exports:[
    Material.MatTabsModule,
    Material.MatInputModule,
    Material.MatFormFieldModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatSelectModule,
    Material.MatRadioModule,
    Material.MatCardModule,
    Material.MatButtonModule,
    Material.MatIconModule,
    Material.MatProgressBarModule
  ]
})
export class MaterialModule { }
