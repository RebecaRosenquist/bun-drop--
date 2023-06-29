# Bun-Drop

Detta är en app med fokus på gränssnitt. Det är en webbshop där användaren ska kunna göra en önskad beställning genom varukorg -> checkout -> bekräftelse

## Features

- Visa en meny ifrån produkter kopplat till json-servern
- Lägga till och ta bort varor i varukorgen
- Gå till checkout och fylla i leveransadress, välja betalmetod och fylla i denna.
- Få en bekräftelse på att ordern är lagt samt beräknad leveranstid 

## Starta appen

### `npm run menu-db`

Kopplar upp json-servern med databaserna:

menu: Här ligger alla varor som finns i webbshopen

Cart: Här regleras varukorgen om man lägger till en vara eller tar bort den.

### `npm run start`

Startar appen i webbläsaren

### http://localhost:3000

Designen ifrån figma:

OBS (Note till Albin): Appen är byggd på en bred skärm och kommer därför inte se densamma ut på tex en laptop. På skärmen jag byggt appen på ser designen densamma ut som i Figma (tex 4 hamburgare i bredd i meny-vyn). När jag kopplade ur skärmarna så märkte jag att designen förändrades en hel del på min laptop, tex att bara två hamburgare fick plats i bredd.

Skärm arbetet utgått ifrån: HP M24f FHD-bildskärm 23,8 tum

https://www.figma.com/file/TBkiEcML8utqMlbuUgo9jd/Bun-drop?type=design&node-id=0-1&mode=design&t=qrZLovWm6X1Gz5Z5-0

