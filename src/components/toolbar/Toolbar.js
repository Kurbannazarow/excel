import { ExcelComponent } from "../../core/ExcelComponent";

export class Toolbar extends ExcelComponent {
    static className = 'excel__toolbar'

    constructor($root) {
        super($root, {
            name: 'ToolBar',
            listeners: ['click']
        })
    }

    toHTML() {
        return `
        <div class="button">
            <span class="material-icons">content_copy</span>
        </div>

        <div class="button">
            <span class="material-icons">content_cut</span>
        </div>

        <div class="button">
            <span class="material-icons">content_paste</span>
        </div>

        <div class="button">
            <span class="material-icons">format_align_left</span>
        </div>

        <div class="button">
            <span class="material-icons">format_align_center</span>
        </div>

        <div class="button">
            <span class="material-icons">format_align_justify</span>
        </div>

        <div class="button">
            <span class="material-icons">format_align_right</span>
        </div>

        <div class="button">
            <span class="material-icons">format_bold</span>
        </div>

        <div class="button">
            <span class="material-icons">format_italic</span>
        </div>

        <div class="button">
            <span class="material-icons">format_underlined</span>
        </div>

        <div class="button">
            <span class="material-icons">format_strikethrough</span>
        </div>

        <div class="button">
            <span class="material-icons">title</span>
        </div>

        <div class="button">
            <span class="material-icons">text_fields</span>
        </div>

        <div class="button">
            <span class="material-icons">vertical_align_center</span>
        </div>

        <div class="button">
            <span class="material-icons">height</span>
        </div>
        
        <div class="button">
            <span class="material-icons">insert_photo</span>
        </div>
        `
    }

    onClick(event) {
        
        if (event.target.textContent === 'content_copy') {
            console.log('aaaaaa')
        } else {
            console.log(event.target)
        }
    }
}