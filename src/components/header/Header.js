import {
    ExcelComponent
} from "../../core/ExcelComponent";

export class Header extends ExcelComponent {

    static className = 'excel__header'

    toHTML() {
        return `
        <input type="text" class="input" placeholder="Новая таблица">
        <div class="ddd">
            <div class="button">
                <span class="material-icons">restore_from_trash</span>
            </div>
            <div class="button">
                <span class="material-icons">exit_to_app</span>
            </div>
        </div>
        `
    }
}