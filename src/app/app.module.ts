import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TextFieldModule } from '@angular/cdk/text-field'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ResizeExampleComponent } from './resize-example/resize-example.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
    declarations: [AppComponent, ResizeExampleComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TextFieldModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
