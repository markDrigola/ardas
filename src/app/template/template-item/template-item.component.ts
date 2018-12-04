import {Component, OnInit} from '@angular/core';
import {TemplateService} from '../template.service';
import {TemplateModel} from '../template.model';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-template-item',
    templateUrl: './template-item.component.html',
    styleUrls: ['./template-item.component.css']
})
export class TemplateItemComponent implements OnInit {

    public template: TemplateModel = null;

    constructor(
        private templateService: TemplateService,
        private activatedRoute: ActivatedRoute
    ) {
    }

    ngOnInit() {

        this.activatedRoute.params.subscribe((params) => {
            this.templateService.getTemplateById(params['id'])
                .subscribe((template: TemplateModel) => {
                    this.template = template;
                });
        });
    }

}
