import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { TemplateListComponent } from './template-list/template-list.component';
import { TemplateItemComponent } from './template-item/template-item.component';
import {TemplateRoutingModule} from "./template-routing.module";

@NgModule({
    imports: [
        CommonModule,
        TemplateRoutingModule
    ],
    declarations: [
        TemplateListComponent,
        TemplateItemComponent
    ],
    exports: [
        TemplateListComponent
    ]
})
export class TemplateModule {}
