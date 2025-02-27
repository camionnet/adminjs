"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* eslint-disable @typescript-eslint/camelcase */

/* spellchecker: disable */
const translations = {
  actions: {
    new: 'Neu Erstellen',
    edit: 'Bearbeiten',
    show: 'Anzeigen',
    delete: 'Löschen',
    bulkDelete: 'Alle Löschen',
    list: 'Auflisten'
  },
  buttons: {
    save: 'Speichern',
    addNewItem: 'Neuen Eintrag hinzufügen',
    filter: 'Filter',
    applyChanges: 'Änderungen übernehmen',
    resetFilter: 'Zurücksetzen',
    confirmRemovalMany: 'Bestätigen Sie das Löschen des Eintrag',
    confirmRemovalMany_plural: 'Bestätigen Sie das Löschen der {{count}} Einträge',
    logout: 'Abmelden',
    login: 'Anmelden',
    seeTheDocumentation: 'Siehe: <1>die Dokumentation</1>',
    createFirstRecord: 'Ersten Eintrag erstellen'
  },
  labels: {
    navigation: 'Navigation',
    pages: 'Seiten',
    selectedRecords: 'Ausgewählt ({{selected}})',
    filters: 'Filter',
    adminVersion: 'Admin: {{version}}',
    appVersion: 'App: {{version}}',
    loginWelcome: 'Wilkommen',
    dashboard: 'Dashboard'
  },
  properties: {
    length: 'Anzahl',
    from: 'Von',
    to: 'An'
  },
  resources: {},
  messages: {
    successfullyBulkDeleted: 'erfolgreich den Eintrag gelöscht',
    successfullyBulkDeleted_plural: 'erfolgreich {{count}} Einträge gelöscht',
    successfullyDeleted: 'Erfolgreich den gewählten Eintrag gelöscht',
    successfullyUpdated: 'Erfolgreich den gewählten Eintrag aktualisiert',
    thereWereValidationErrors: 'Es sind Validierungsfehler aufgetreten - bitte unten prüfen',
    forbiddenError: 'Sie können {{resourceId}} nicht {{actionName}}',
    anyForbiddenError: 'Sie können diese Aktion nicht durchführen',
    successfullyCreated: 'Erfolgreich einen neuen Eintrag erstellt',
    bulkDeleteError: 'Beim Löschen der Einträge ist ein Fehler aufgetreten, für weitere Informationen die Konsole prüfen',
    errorFetchingRecords: 'Es ist ein Fehler beim Abrufen der Einträge aufgetreten. In der Konsole finden Sie weitere Informationen',
    errorFetchingRecord: 'Es ist ein Fehler beim Abrufen des Eintrages aufgetreten. In der Konsole finden Sie weitere Informationen.',
    noRecordsSelected: 'Sie haben keine Einträge ausgewählt',
    theseRecordsWillBeRemoved: 'Der folgende Eintrag wird entfernt',
    theseRecordsWillBeRemoved_plural: 'Die folgenden Einträge werden entfernt',
    pickSomeFirstToRemove: 'Damit Einträge gelöscht werden können, müssen Sie diese vorher auswählen',
    error404Resource: 'Eintrag mit id: {{resourceId}} kann nicht gefunden werden',
    error404Action: 'Eintrag mit id: {{resourceId}} hat keine Aktion mit dem Namen: {{actionName}} oder Sie sind nicht berechtigt diese auszuführen!',
    error404Record: 'Eintrag mit id: {{resourceId}} hat keinen Eintrag mit der id: {{recordId}} oder Sie sind berechtigt diesen aufzurufen!',
    seeConsoleForMore: 'Siehe Entwicklerkonsole für weitere Details...',
    noActionComponent: 'Sie müssen eine Aktionskomponente für Ihre Aktion implementieren',
    noRecordsInResource: 'Es gibt keine Einträge in dieser Ressource',
    noRecords: 'Keine Einträge',
    confirmDelete: 'Wollen Sie wirklich diesen Eintrag löschen?',
    welcomeOnBoard_title: 'Willkommen an Bord!',
    welcomeOnBoard_subtitle: 'Jetzt gehören Sie zu uns! Wir haben ein paar Tipps für Sie vorbereitet, damit Sie loslegen können:',
    loginWelcome: 'zu AdminJS - dem weltweit führenden, automatisch generierten Open-Source-Admin-Panel für Ihre Node.js-Anwendung, mit dem Sie alle Ihre Daten an einem Ort verwalten können',
    addingResources_title: 'Ressourcen Hinzufügen',
    addingResources_subtitle: 'So fügen Sie neue Ressourcen zur Seitenleiste hinzu',
    customizeResources_title: 'Ressourcen anpassen',
    customizeResources_subtitle: 'Definieren von Verhalten, Hinzufügen von Eigenschaften und mehr...',
    customizeActions_title: 'Aktionen anpassen',
    customizeActions_subtitle: 'Ändern bestehender und Hinzufügen neuer Aktionen',
    writeOwnComponents_title: 'Komponenten schreiben',
    writeOwnComponents_subtitle: 'Wie man das Aussehen von AdminJS ändert',
    customDashboard_title: 'Benutzerdefiniertes Dashboard',
    customDashboard_subtitle: 'So ändern Sie diese Ansicht und fügen neue Seiten in der Seitenleiste hinzu',
    roleBasedAccess_title: 'Rollenbasierte Zugriffskontrolle',
    roleBasedAccess_subtitle: 'Erstellen von Benutzerrollen und Berechtigungen in AdminJS',
    community_title: 'Treten Sie der Slack-Community bei',
    community_subtitle: 'Sprechen Sie mit den Entwicklern von AdminJS und anderen AdminJS-Anwendern',
    foundBug_title: 'Sie haben einen Fehler gefunden? Sie brauchen eine Verbesserung?',
    foundBug_subtitle: 'Erstellen Sie ein Ticket in unserem GitHub Repo',
    needMoreSolutions_title: 'Benötigen Sie fortschrittlichere Lösungen?',
    needMoreSolutions_subtitle: 'Wir sind hier, um Ihnen ein schönes UX/UI-Design und eine maßgeschneiderte Software zu bieten, die (nicht nur) auf AdminJS basiert.',
    invalidCredentials: 'Falsche E-Mail und/oder falsches Passwort'
  }
};
var _default = {
  language: 'de',
  translations
};
exports.default = _default;