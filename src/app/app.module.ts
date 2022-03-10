import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TextFieldModule } from '@angular/cdk/text-field'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ResizeExampleComponent } from './resize-example/resize-example.component'

@NgModule({
    declarations: [AppComponent, ResizeExampleComponent],
    imports: [BrowserModule, AppRoutingModule, TextFieldModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
