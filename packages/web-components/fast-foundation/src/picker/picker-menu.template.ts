import {
    children,
    elements,
    html,
    ref,
    slotted,
    ViewTemplate,
    when,
} from "@microsoft/fast-element";
import type { PickerMenu } from "./picker-menu";

/**
 * The template for the List Picker component.
 * @public
 */
export function createPickerMenuTemplate(prefix: string): ViewTemplate {
    return html<PickerMenu>`
        <template role="list" aria-label="TODO: choose a recipient??">
            ${when(
                x => !x.showNoOptions && !x.showLoading,
                html<PickerMenu>`
                    <div class="options-display" part="options-display">
                        <div class="header-region" part="header-region">
                            <slot
                                name="header-region"
                                ${slotted("headerElements")}
                            ></slot>
                        </div>

                        <slot ${slotted("menuElements")}></slot>

                        <div class="footer-region" part="footer-region">
                            <slot
                                name="footer-region"
                                ${slotted("footerElements")}
                            ></slot>
                        </div>
                        <div
                            role="alert"
                            aria-live="polite"
                            part="suggestions-available-alert"
                            class="suggestions-available-alert"
                        >
                            ${x => x.suggestionsAvailableText}
                        </div>
                    </div>
                `
            )}
            ${when(
                x => x.showNoOptions && !x.showLoading,
                html<PickerMenu>`
                    <div class="no-options-display" part="no-options-display">
                        <slot name="no-options-region">
                            ${x => x.noSuggestionsText}
                        </slot>
                    </div>
                `
            )}
            ${when(
                x => x.showLoading,
                html<PickerMenu>`
                    <div class="loading-display" part="loading-display">
                        <slot name="loading-region">
                            <${prefix}-progress-ring
                                part="loading-progress"
                                class="loading-progress
                                slot="loading-region"
                            ></${prefix}-progress-ring>
                            ${x => x.loadingText}
                        </slot>
                    </div>
                `
            )}
        </template>
    `;
}
