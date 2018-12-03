import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, pipe} from "rxjs/Rx";
import {map} from "rxjs/internal/operators";
import {TemplateModel} from "./template.model";
import {TemplateModelFactory} from "./template.model.factory";

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor(
      private http: HttpClient,
      private templateModelFactory: TemplateModelFactory
  ) { }

  public getTemplateList(): Observable<TemplateModel[]> {
      return this.http.get('http://localhost:3000/templates')
          .pipe(
              map((data: TemplateModel[]) => {
                  const templates: TemplateModel[] = [];

                  data.forEach((unit: TemplateModel) => {
                      const templateUnit: TemplateModel = this.templateModelFactory.create(unit);

                      templates.push(templateUnit);
                  });

                  return templates;
              })
          );
  }

  public getTemplateById(id: number): Observable<TemplateModel> {
      return this.http.get(`http://localhost:3000/templates/${id}`)
          .pipe(
              map((template: TemplateModel) => {
                  return this.templateModelFactory.create(template);
              })
          );
  }
}
