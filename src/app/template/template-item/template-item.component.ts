import { Component, OnInit } from '@angular/core';
import {TemplateService} from "../template.service";
import {TemplateModel} from "../template.model";
import {ActivatedRoute} from "@angular/router";
import * as moment from 'moment';

@Component({
  selector: 'app-template-item',
  templateUrl: './template-item.component.html',
  styleUrls: ['./template-item.component.css']
})
export class TemplateItemComponent implements OnInit {

  constructor(
      private templateService: TemplateService,
      private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

      this.activatedRoute.params.subscribe((params) => {
          this.templateService.getTemplateById(params['id'])
              .subscribe((template: TemplateModel) => {
                  console.log(moment(template.modified).format('YY:MM:DD:dd:hh:mm'));

              });
      });
  }

}
