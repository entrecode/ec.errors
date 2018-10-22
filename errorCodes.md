
# Error Codes
| code | message | message (de) | status |
|---|---|---|---|
| 100 | Resource not found | Resource nicht gefunden | 404 |
| 101 | No resource entity matching body property filter found | Keine zu den Body-Parametern passende Resource gefunden | 404 |
| 102 | No resource entity matching query string filter found | Keine zu den Query-Parametern passende Resoruce gefunden | 404 |
| 110 | Method not allowed | Methode nicht erlaubt | 405 |
| 112 | Somebody else changed the resource | Resource wurde von jemand anderem verändert | 412 |
| 150 | Error in Remote API | Fehler in Remote-API | 400 |
| 200 | Missing body | Fehlender Body | 400 |
| 201 | Missing property in JSON body | Fehlender Parameter im JSON Body | 400 |
| 202 | Missing property in query string | Fehlender Parameter im Query-String | 400 |
| 203 | Missing file in upload | undefined | 400 |
| 204 | Missing HAL link or embed in JSON body | Fehlender HAL Link oder eingebettete Resource | 400 |
| 211 | Invalid format for property in JSON body | Fehlerhaftes format für JSON Body Parameter | 400 |
| 212 | Invalid format for property in query string | Fehlerhaftes format für Query-String Parameter | 400 |
| 213 | Invalid file format in upload | Fehlerhaftes Dateiformat im Upload | 400 |
| 214 | Invalid linked or embedded HAL resource in JSON body, or link not found | Fehlerhafte verlinkte oder eingebettete HAL Resrouce im JSON Body, oder Linkt nicht gefunden | 400 |
| 215 | Resource cannot be sorted after given property | Resource kann nicht mit übergebenem Parameter sortiert werden | 400 |
| 216 | Resource cannot be filtered with given property | Resource kann nicht mit übergebenem Parameter gefiltert werden | 400 |
| 217 | Resource cannot be range-filtered with given property | Resource kann nicht mit übergebenem Parameter bereichs-gefiltert werden | 400 |
| 251 | Password is too short (min. 4 characters) | Passwort zu kurt (min. 4 Zeichen) | 400 |
| 252 | Unmatched validation error | Nicht abgefangener Validierungsfehler | 400 |
| 253 | Invalid asset to merge | Fehlerhaftes Asset zum Zusammenführen | 400 |
| 254 | Exceeded maximum levels for nested request. | undefined | 400 |
| 255 | Could not get nested resources. | Konnte eingebettete Resource nicht laden | 400 |
| 256 | Could not create download file. | Konnte Download Datei nicht erstellen | 400 |
| 311 | Invalid value for property in JSON body | Fehlerhaftes Wert für Parameter im JSON Body | 400 |
| 351 | eMail address is unavailable | E-Mail-Adresse nicht verfügbar | 403 |
| 352 | Cannot delete openID connection | Kann openID Verbindung nicht löschen | 403 |
| 353 | Duplicate model/assetgroup in same data manager | Doppeltes Model/doppelte Asset Group im gleichen DataManager | 403 |
| 354 | Cannot delete model, has entries | Kann Model nicht löschen, hat Entries | 403 |
| 355 | Kann Model nicht löschen, zwingend notwendig | undefined | 403 |
| 356 | Cannot change Model, has Entries. | Kann Model nicht ändern, hat Entries | 403 |
| 357 | Model must support default locale | Model muss standart Localisierung unterstützen | 400 |
| 358 | Unsupported locale | Nicht unterstützte Localisierung | 400 |
| 359 | Violates unique constraint | Verletzt Einzigartigkeit | 400 |
| 360 | Cannot delete entry. Referenced as required. | Kann Entry nicht löschen. Als erforderlich referenziert | 400 |
| 361 | Cannot change entry. Read Only. | Kann entry nicht ändern. Ist Schreibgeschützt | 403 |
| 362 | Cannot change entry. Reference not allowed due to type validation. | Kann Entry nicht ändern. Referenz nicht erlaubt, fehlerhafte Typ-Validierung | 400 |
| 363 | Cannot change Model, edit of mandatory/unmutable field. | Kann Model nicht ändern. Änderung von Systemfeldern nicht erlaubt | 403 |
| 364 | Cannot change Model, reserved field title. | Kann Model nicht ändern. Reservierter Feldname | 400 |
| 365 | Cannot change Model, duplicate model title. | Kann Model nicht ändern. Doppelter Model name | 400 |
| 366 | Duplicate field name in model. | Doppelter Feldname im Model. | 400 |
| 367 | Field cannot be unique and localizable. | Feld kann nicht gleichzeitig einzigartig und lokalisierbar sein | 400 |
| 368 | Field of type boolean must be required. | Felder mit typ Boolean müssen erforderlich sein | 400 |
| 369 | Title field not a field in the model. | Titelfeld nicht als Feld im Model gefunden | 400 |
| 370 | Cannot delete resource. Is used. | Kann Resource nicht löschen, wird verwendet | 403 |
| 371 | Cannot change entry. Reference not found. | Kann Entry nicht ändern. Referenz nicht gefunden | 400 |
| 372 | Required field must have a default value set. | Erforderliche Felder müssen Standartwert gesetzt haben. | 400 |
| 373 | Other parallel request already added tag(s) | Anderer paralleler Request hat Tag schon bearbeitet | 400 |
| 374 | Cannot export datamanager. Required field in model has no default value. | Kann DataManager nicht exportieren. Erforderliches Feld in Model hat keinen Standartwert | 400 |
| 375 | A duplicate asset already exists in this AssetGroup. Set `ignoreDuplicates` flag to ignore. No assets were uploaded. | Ein gleiches Asset existiert bereits in dieser AssetGroup. Zum Ignorieren `ignoreDuplicates` flag setzten. Kein Asset wurde Hochgeladen | 400 |
| 376 | A duplicate asset filename already exists in this AssetGroup. Remove `preserveFilenames` flag to use a random filename. No assets were uploaded. | Ein Asset mit gleichem Dateinamen existiert bereits in dieser AssetGroup. `preserveFilenames` flag entfernen um zufälligen Dateinamen zu verwenden. Kein Asset wurde Hochgeladen | 400 |
| 400 | Missing Access Token | Fehlender Access Token | 401 |
| 401 | Invalid Access Token | Fehlerhafter Access Token | 401 |
| 402 | Outdated Access Token | Access Token abgelaufen | 401 |
| 403 | Invalid Password | Falsches Passwort | 401 |
| 404 | Account not found (unknown email address) | Account nicht gefunden (unbekannte E-Mail-Adresse) | 404 |
| 410 | Insufficient rights to access the requested resource | Keine Berechtigung die angeforderte Resource zu laden | 401 |
| 411 | Insufficient rights to access the requested resource with this method | Keine Berechtigung die angeforderte Resource mit dieser Methode zu laden | 405 |
| 444 | Denied because of stupidity | http://www.nichtlustig.de/toondb/040816.html | 403 |
| 451 | Too many wrong login attempts, please wait | Zu viele Login-Versuche. Bitte warten | 429 |
| 452 | User blocked | Benutzer blokiert | 403 |
| 453 | Invalid invite | Fehlerhafte Einladung | 403 |
| 460 | Generic OAuth Error | Allgemeint OAuth Fehler | 400 |
| 461 | Facebook OAuth Request failed | Facebook OAuth fehlgeschlagen | 400 |
| 462 | Facebook API call failed to receive eMail address | Facebook Request konnte E-Mail-Adresse nicht laden | 400 |
| 470 | Target resource does not fulfill permission policy conditions | Resource erfüllt Bedingung für Berechtigung nicht | 403 |
| 471 | Property cannot be written due to permission policy restrictions | Parameter kann nicht geschrieben werden auf grund von eingeschränkter Richtlinie | 403 |
| 472 | Error while processing asset file | Fehler beim bearbeiten der Datei | 400 |
| 473 | Error running template | Fehler beim Ausführen der Template | 400 |
| 500 | Missing plan for this product | Fehlender Vertrag für dieses Produkt | 403 |
| 510 | Insufficient plan for this product | Vertrag umfasst dieses Produkt nicht | 403 |
| 511 | Insufficient plan for creation | Kann dies im aktuellen Vertrag nicht erstellen | 403 |
| 003 | Service currently unavailable | undefined | 503 |
| 000 | Internal Error | undefined | 500 |