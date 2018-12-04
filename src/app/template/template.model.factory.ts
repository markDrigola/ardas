import {Injectable} from "@angular/core";
import {TemplateModel} from "./template.model";
import * as moment from 'moment';

@Injectable({
    providedIn: 'root'
})
export class TemplateModelFactory {

    public create(data: TemplateModel): TemplateModel {
        if (this.validator(data) === false) {
            throw new Error('Template data is invalid');
        }

        data.modified = this.setDateFormat(data.modified);

        return new TemplateModel(data);
    }

    private validator(data: TemplateModel) {
        if (
            data.id !== undefined &&
            data.name !== undefined &&
            data.template !== undefined &&
            data.modified !== undefined
        ) {
            return true;
        }

        return false;
    }

    private setDateFormat(date: number): string {
        return moment(date).format();
    }
}
