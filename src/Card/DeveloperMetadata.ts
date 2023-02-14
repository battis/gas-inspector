import { Terse } from '@battis/gas-lighter';

function summarize(meta: GoogleAppsScript.Spreadsheet.DeveloperMetadata) {
    return {
        id: meta.getId(),
        key: meta.getKey(),
        value: meta.getValue(),
        location: meta.getLocation(),
        visibility: meta.getVisibility(),
    };
}

export function getCard() {
    const spreadsheet = SpreadsheetApp.getActive();
    const sheet = spreadsheet.getActiveSheet();
    return Terse.CardService.newCard({
        header: 'Developer Metadata',
        widgets: [
            Terse.CardService.newDecoratedText({
                topLabel: 'Spreadsheet',
                text: JSON.stringify(
                    spreadsheet.getDeveloperMetadata().map(summarize),
                    null,
                    2
                ),
            }),
            Terse.CardService.newDecoratedText({
                topLabel: 'Sheet',
                text: JSON.stringify(
                    sheet.getDeveloperMetadata().map(summarize),
                    null,
                    2
                ),
            }),
        ],
    });
}

export function getActionResponse() {
    return Terse.CardService.pushCard(getCard());
}

global.card_developerMetadata = getActionResponse;
export const getFunctionName = () => 'card_developerMetadata';
