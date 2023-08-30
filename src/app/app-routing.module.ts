import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"


const routes : Routes = [
    {path:'home', component:HomeComponent},
    {path:'presentation', component:PresentationComponent},
    {path:'contact', component:ContactComponent},
    {path:'**', redirectTo:'home'}   //erreur404 
    ];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class appRoutingModule{


}