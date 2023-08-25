import { Page } from 'playwright';
import { selectors } from '../config/siteConfig';

class BookingFlightPage {
    constructor(private page: Page) {}

    async selectOrigin(destination: string) {
        await this.page.selectOption(selectors.origin, destination);
    }

    async selectDestination(destination: string) {
        await this.page.selectOption(selectors.destination, destination);
        await this.page.waitForLoadState();
    }

    async selectOnlyOneWay() {
        await this.page.click(selectors.onlyOneWay);
    }

    async chooseDepartureDate() {
        await this.page.click(selectors.calendar);
        await this.page.locator(selectors.chosenDate).nth(1).click();
    }

    async clickSearchFlight() {
        await this.page.click(selectors.searchFlightButton);
        await this.page.waitForLoadState();
    }
}

export default BookingFlightPage;
