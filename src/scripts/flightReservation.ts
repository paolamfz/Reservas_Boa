import { chromium, Browser, Page, LaunchOptions, BrowserContextOptions } from 'playwright';
import dotenv from 'dotenv';
import { SITE_URL } from '../config/siteConfig';
import { navigateTo } from '../utils/helpers';
import BookingFlightPage from './bookingFlightPage'; 
import ConfirmationBookingPage from './confirmationBookingPage';
dotenv.config();

async function automateFlightReservation() {
    const browserOptions: LaunchOptions = { headless: false };
    const contextOptions: BrowserContextOptions = {};

       const browser = await chromium.launch(browserOptions);
        const context = await browser.newContext(contextOptions);
        const page: Page = await context.newPage();

        await navigateTo(SITE_URL, page);

        const reservaPage = new BookingFlightPage(page);
        const confirmacionPage = new ConfirmationBookingPage(page);

        await reservaPage.selectOrigin('COCHABAMBA');
        await reservaPage.selectDestination('LA PAZ');
        await reservaPage.selectOnlyOneWay();
        await reservaPage.chooseDepartureDate();
        await reservaPage.clickSearchFlight();

        await confirmacionPage.clickChosenTicket();
        await confirmacionPage.clickConfirmTicket();
        await confirmacionPage.fillPassengerData('Paola', 'Montano', 'montanofernandezpaola@gmail.com', '79373947');
        await confirmacionPage.selectDocumemtTypeAndId('CI', '9315248cb');
        await confirmacionPage.confirmReservation();

}

automateFlightReservation();
