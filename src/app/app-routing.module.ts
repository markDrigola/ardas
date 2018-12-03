import {NgModule} from "@angular/core";
import {Route, RouterModule, Routes} from "@angular/router";

export const routes: Routes = [
    {
        path: '', redirectTo: '/template', pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
