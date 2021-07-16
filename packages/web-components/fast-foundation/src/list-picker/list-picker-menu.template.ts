import {
    children,
    elements,
    html,
    ref,
    slotted,
    ViewTemplate,
    when,
} from "@microsoft/fast-element";
import { ListPickerMenu } from "./list-picker-menu";

/**
 * The template for the List Picker component.
 * @public
 */
export function createListPickerMenuTemplate(prefix: string): ViewTemplate {
    return html<ListPickerMenu>`
        <template role="list">
            <div class="header-region" part="header-region" role="list">
                <slot name="header-region"></slot>
            </div>

            <slot></slot>

            <div class="footer-region" part="footer-region" role="list">
                <slot name="footer-region"></slot>
            </div>
        </template>
    `;
}
