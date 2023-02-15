import { Terse } from '@battis/gas-lighter';

function detail(meta: GoogleAppsScript.Spreadsheet.DeveloperMetadata) {
    return {
        id: meta.getId(),
        key: meta.getKey(),
        value: meta.getValue(),
        location: meta.getLocation(),
        visibility: meta.getVisibility(),
    };
}

function summary(meta: GoogleAppsScript.Spreadsheet.DeveloperMetadata[]) {
    return JSON.stringify(meta.map(detail), null, 2);
}

export function getCard() {
    const spreadsheet = SpreadsheetApp.getActive();
    const sheet = spreadsheet.getActiveSheet();
    return Terse.CardService.newCard({
        header: 'Developer Metadata',
        widgets: [
            Terse.CardService.newDecoratedText({
                topLabel: 'Spreadsheet',
                text: summary(spreadsheet.getDeveloperMetadata()),
            }),
            Terse.CardService.newDecoratedText({
                topLabel: 'Sheet',
                text: summary(sheet.getDeveloperMetadata()),
            }),
        ],
    });
}

export function getActionResponse() {
    return Terse.CardService.pushCard(getCard());
}

global.card_developerMetadata = getActionResponse;
export const getFunctionName = () => 'card_developerMetadata';
