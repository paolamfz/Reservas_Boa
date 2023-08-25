import { Page } from 'playwright';
import { selectors } from '../config/siteConfig';

class ConfirmationBookingPage {
    constructor(private page: Page) {}

    async clickChosenTicket() {
        await this.page.locator(selectors.pasajeCajaSeleccionado).nth(1).click();
    }

    async clickConfirmTicket() {
        await this.page.click(selectors.confirmarPasajeButton);
        await this.page.pause();
    }

    async fillPassengerData(nombre: string, apellido: string, email: string, telefono: string) {
        await this.page.fill(selectors.nombrePasajero, nombre);
        await this.page.fill(selectors.apellidoPasajero, apellido);
        await this.page.fill(selectors.emailPasajero, email);
        await this.page.fill(selectors.telefonoPasajero, telefono);
    }

    async selectDocumemtTypeAndId(tipoDocumento: string, numeroDocumento: string) {
        await this.page.selectOption(selectors.tipoDocumento, tipoDocumento);
        await this.page.fill(selectors.numeroDocumento, numeroDocumento);
    }

    async confirmReservation() {
        await this.page.click(selectors.confirmReservationButton);
        await this.page.waitForTimeout(5000);
        await this.page.close();
    }
}

export default ConfirmationBookingPage;
