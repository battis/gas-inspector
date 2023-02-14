import { Terse } from '@battis/gas-lighter';
import * as Card from '../Card';

export function onHomepage() {
    return Terse.CardService.newCard({
        header: 'Debugging',
        widgets: [
            Terse.CardService.newTextButton({
                text: 'Developer Metadata',
                functionName: Card.DeveloperMetadata.getFunctionName(),
            }),
        ],
    });
}
