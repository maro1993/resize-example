import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ResizeExampleComponent } from './resize-example/resize-example.component'

const routes: Routes = [
    { path: 'resize-example', component: ResizeExampleComponent },
    { path: '**', redirectTo: 'resize-example' },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
