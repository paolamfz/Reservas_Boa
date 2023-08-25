import { Page } from 'playwright';
import { selectors } from '../config/siteConfig';

class ConfirmationBookingPage {
    constructor(private page: Page) {}

    async clickChosenTicket() {
        await this.page.locator(selectors.chosenTicket).nth(1).click();
    }

    async clickConfirmTicket() {
        await this.page.click(selectors.confirmTicketButton);
        await this.page.waitForLoadState();
    }

    async fillPassengerData(name: string, lastname: string, email: string, phone: string) {
        await this.page.fill(selectors.passengerName, name);
        await this.page.fill(selectors.lastNamePassenger, lastname);
        await this.page.fill(selectors.email, email);
        await this.page.fill(selectors.phone, phone);
    }

    async selectDocumentTypeAndId(documentType: string, documentId: string) {
        await this.page.selectOption(selectors.documentType, documentType);
        await this.page.fill(selectors.documentId, documentId);
    }

    async confirmReservation() {
        await this.page.click(selectors.confirmReservationButton);
        await this.page.waitForTimeout(3000);
    }
}

export default ConfirmationBookingPage;
