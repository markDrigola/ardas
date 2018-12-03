import {Component, OnInit} from '@angular/core';
import {TemplateService} from "../template.service";
import {TemplateModel} from "../template.model";

@Component({
    selector: 'app-template-list',
    templateUrl: './template-list.component.html',
    styleUrls: ['./template-list.component.css']
})
export class TemplateListComponent implements OnInit {

    public templatesList: TemplateModel[] = [];

    constructor(private templateService: TemplateService) {}

    ngOnInit() {
        this.templateService.getTemplateList()
            .subscribe((templateList: TemplateModel[]) => {
                this.templatesList = templateList;
            });
    }

}
