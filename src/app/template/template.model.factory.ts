import {Injectable} from "@angular/core";
import {TemplateModel} from "./template.model";

@Injectable({
    providedIn: 'root'
})
export class TemplateModelFactory {

    public create(data: TemplateModel): TemplateModel {
        if (this.validator(data) === false) {
            throw new Error('Template data is invalid');
        }

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
}
