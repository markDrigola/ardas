import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TemplateItemComponent} from "./template-item/template-item.component";
import {TemplateListComponent} from "./template-list/template-list.component";

export const routes: Routes = [
    {
        path: 'template', component: TemplateListComponent, children: [
            {
                path: ':id', component: TemplateItemComponent, pathMatch: 'full'
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TemplateRoutingModule {
}
