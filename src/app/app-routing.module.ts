import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuerpoComponent } from './componentes/cuerpo/cuerpo.component';
import { PieComponent } from './componentes/pie/pie.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { Page1Component } from './componentes/cuerpo/page1/page1.component';
import { Page2Component } from './componentes/cuerpo/page2/page2.component';
import { Page3Component } from './componentes/cuerpo/page3/page3.component';

const routes: Routes = [
  {path:'', redirectTo: 'cuerpo', pathMatch: 'full'},
  {path:'cuerpo', component: CuerpoComponent},
  {path:'pie', component: PieComponent},
  {path:'page1', component:Page1Component},
  {path:'page2', component:Page2Component},
  {path:'page3', component:Page3Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
