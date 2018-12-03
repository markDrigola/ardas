export class TemplateModel {

    public id: number = null;

    public name: string = null;

    public template: string = null;

    public modified: number = null;

    constructor(
        data: TemplateModel
    ) {
        this.id = data.id;
        this.name = data.name;
        this.template = data.template;
        this.modified = data.modified;
    }
}
