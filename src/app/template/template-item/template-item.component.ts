import {Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import {TemplateService} from '../template.service';
import {TemplateModel} from '../template.model';
import {ActivatedRoute} from '@angular/router';
import * as moment from 'moment';
import {fromEvent} from 'rxjs';

@Component({
    selector: 'app-template-item',
    templateUrl: './template-item.component.html',
    styleUrls: ['./template-item.component.css']
})
export class TemplateItemComponent implements OnInit {

    public template: TemplateModel;

    @ViewChild('templateElement') templateElement;

    constructor(
        private templateService: TemplateService,
        private activatedRoute: ActivatedRoute,
        private renderer: Renderer2
    ) {

    }

    ngOnInit() {
        this.setObservablesFromEvent();

        this.activatedRoute.params.subscribe((params) => {
            this.templateService.getTemplateById(params['id'])
                .subscribe((template: TemplateModel) => {
                    this.template = template;
                });
        });
    }

    private setObservablesFromEvent() {
        console.log(window.getSelection());
        console.log(this.templateElement.nativeElement);
        // const allotmentElement = fromEvent('selection')
    }
}
