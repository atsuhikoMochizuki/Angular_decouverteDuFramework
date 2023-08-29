import { Component, NgModule } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { BrowserModule } from "@angular/platform-browser";


@Component({
  selector: 'app-root',
  template: `
  <app-header>
    <app-menu></app-menu>
  </app-header>
  <app-footer></app-footer>
  `
})
class AppComponent { }

@Component({
  selector: 'app-header',
  template: `
  <h2>Haut de page</h2>
  <app-menu></app-menu>
`
})
class HeaderComponent { }

@Component({
  selector: 'app-footer',
  template: '<footer>Pied de page </footer>'
})
class FooterComponent { }

@Component({
  selector: 'app-menu',
  template: `
  <div><a href='/home'>Accueil</a></div>
  <div><a href = '/presentation'> Présentation </a></div >
  <div><a href='/contact' > Contact </a></div >
  `
})
class MenuComponent {

}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})

class AppModule {
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => console.log("L'application a été chargée..."))
  .catch(console.error);
