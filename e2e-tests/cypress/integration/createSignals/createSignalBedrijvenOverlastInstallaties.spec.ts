import { BEDRIJVEN_HORECA } from '../../support/selectorsCreateSignal';
import { MANAGE_SIGNALS } from '../../support/selectorsManageIncidents';
import questions from '../../fixtures/questions/questions.json';
import { generateToken } from '../../support/jwt';
import signal from '../../fixtures/signals/bedrijvenInstallaties.json';
import * as routes from '../../support/commandsRouting';
import * as createSignal from '../../support/commandsCreateSignal';
import * as general from '../../support/commandsGeneral';

const sizes = [[375, 667], [1920, 1080]];

describe('Create signal "Bedrijven overlast installaties" and check signal details', () => {
  sizes.forEach(size => {
    describe(`Create signal overlast installaties, resolution is: ${size}`, () => {
      before(() => {
        general.setResolution(size);
        routes.postSignalRoutePublic();
        routes.stubPreviewMap();
        routes.stubMap();
        cy.visit('incident/beschrijf');
      });

      it('Should create the signal', () => {
        createSignal.setDescriptionPage(signal);
        cy.contains('Volgende').click();

        createSignal.checkSpecificInformationPage(signal);

        cy.contains(questions.overlastBedrijvenEnHoreca.extra_bedrijven_horeca_wat.label).should('be.visible');
        cy.get(BEDRIJVEN_HORECA.radioButtonIetsAnders).click({ force: true });
        cy.contains(questions.overlastBedrijvenEnHoreca.extra_bedrijven_horeca_naam.label).should('be.visible');
        cy.get(BEDRIJVEN_HORECA.inputWieWat).eq(0).type('Het geluid van de afzuigkap is tot in Oostzaan te horen.');
        cy.contains(questions.overlastBedrijvenEnHoreca.extra_bedrijven_horeca_adres.label).should('be.visible');
        cy.get(BEDRIJVEN_HORECA.inputAdres).eq(1).type('1033PG 5');
        cy.contains(questions.overlastBedrijvenEnHoreca.extra_bedrijven_horeca_installaties.label).should('be.visible');
        cy.contains(questions.overlastBedrijvenEnHoreca.extra_bedrijven_horeca_installaties.subtitle).should('be.visible');
        cy.get(BEDRIJVEN_HORECA.inputSoortInstallatie).eq(2).type('Afzuiginstallatie');
        cy.contains(questions.overlastBedrijvenEnHoreca.extra_bedrijven_horeca_vaker.label).should('be.visible');
        cy.contains(questions.overlastBedrijvenEnHoreca.extra_bedrijven_horeca_vaker.subtitle).should('be.visible');
        cy.get(BEDRIJVEN_HORECA.radioButtonVakerNee).click({ force: true });
        cy.contains(questions.overlastBedrijvenEnHoreca.extra_bedrijven_horeca_caution.answers).should('be.visible');
        cy.contains(questions.overlastBedrijvenEnHoreca.extra_bedrijven_horeca_muziek_geluidmeting_installaties.label).should('be.visible');
        cy.contains(questions.overlastBedrijvenEnHoreca.extra_bedrijven_horeca_muziek_geluidmeting_installaties.subtitle).should('be.visible');
        cy.get(BEDRIJVEN_HORECA.radioButtonContactNee).click({ force: true });
        cy.contains(questions.overlastBedrijvenEnHoreca.extra_bedrijven_horeca_muziek_geluidmeting_nee.label).should('be.visible');
        cy.get(BEDRIJVEN_HORECA.inputWaaromGeenContact).eq(3).type('Ik heb contacteer-angst');
        cy.contains('Volgende').click();

        createSignal.setPhonenumber(signal);
        cy.contains('Volgende').click();

        createSignal.setEmailAddress(signal);
        cy.contains('Volgende').click();

        createSignal.checkSummaryPage(signal);
        cy.contains('Verstuur').click();
        cy.wait('@postSignalPublic');
        cy.get(MANAGE_SIGNALS.spinner).should('not.exist');

        createSignal.checkThanksPage();
        createSignal.saveSignalId();
      });
    });
    describe('Check data created signal', () => {
      before(() => {
        localStorage.setItem('accessToken', generateToken('Admin', 'signals.admin@example.com'));
        routes.getManageSignalsRoutes();
        routes.getSignalDetailsRoutesById();
        cy.visit('/manage/incidents/');
        routes.waitForManageSignalsRoutes();
      });

      it('Should show the signal details', () => {
        routes.stubPreviewMap();
        createSignal.openCreatedSignal();
        routes.waitForSignalDetailsRoutes();

        createSignal.checkAllDetails(signal);
      });
    });
  });
});
