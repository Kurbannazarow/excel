import { ExcelComponent } from "../../core/ExcelComponent";

export class Footer extends ExcelComponent {

    static className = 'excel__footer'

    toHTML() {
        return '<h1>Footer</h1>'
    }
}