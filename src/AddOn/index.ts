import { Terse } from '@battis/gas-lighter';

export * as Sheets from './Sheets';

export function onHomepage() {
    return Terse.CardService.newCard({
        header: 'Debugging',
        widgets: [
            Terse.CardService.newTextParagraph(
                'Tools for debugging Google Apps Script.'
            ),
        ],
    });
}
