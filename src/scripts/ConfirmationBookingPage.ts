import { Page } from 'playwright';
import { selectors } from '../config/siteConfig';

class ConfirmationBookingPage {
    constructor(private page: Page) {}

    async clickChosenTicket() {
        await this.page.locator(selectors.chosenTicket).nth(1).click();
    }

    async clickConfirmTicket() {
        await this.page.click(selectors.confirmTicketButton);
        await this.page.pause();
    }

    async fillPassengerData(nombre: string, apellido: string, email: string, telefono: string) {
        await this.page.fill(selectors.passengerName, nombre);
        await this.page.fill(selectors.passengerLastName, apellido);
        await this.page.fill(selectors.email, email);
        await this.page.fill(selectors.phone, telefono);
    }

    async selectDocumemtTypeAndId(tipoDocumento: string, numeroDocumento: string) {
        await this.page.selectOption(selectors.documentType, tipoDocumento);
        await this.page.fill(selectors.documentId, numeroDocumento);
    }

    async confirmReservation() {
        await this.page.click(selectors.confirmReservationButton);
        await this.page.waitForTimeout(5000);
        await this.page.close();
    }
}

export default ConfirmationBookingPage;
