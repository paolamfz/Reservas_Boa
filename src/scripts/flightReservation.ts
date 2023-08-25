import { chromium, Browser, Page, LaunchOptions, BrowserContextOptions } from 'playwright';
import dotenv from 'dotenv';
import { SITE_URL } from '../config/siteConfig';
import { navigateTo } from '../utils/helpers';
import BookingFlightPage from './BookingFlightPage'; 
import ConfirmationReservationPage from './ConfirmationBookingPage';
dotenv.config();

async function automateFlightReservation() {
    const browserOptions: LaunchOptions = { headless: false };
    const contextOptions: BrowserContextOptions = {};

       const browser = await chromium.launch(browserOptions);
        const context = await browser.newContext(contextOptions);
        const page: Page = await context.newPage();

        await navigateTo(SITE_URL, page);

        const bookingPage = new BookingFlightPage(page);
        const confirmationPage = new ConfirmationReservationPage(page);

        await bookingPage.selectOrigin('COCHABAMBA');
        await bookingPage.selectDestination('LA PAZ');
        await bookingPage.selectOnlyOneWay();
        await bookingPage.chooseDepartureDate();
        await bookingPage.clickSearchFlight();

        await confirmationPage.clickConfirmTicket();
        await confirmationPage.fillPassengerData('Paola', 'Montano', 'montanofernandezpaola@gmail.com', '79373947');
        await confirmationPage.selectDocumentTypeAndId('CI', '9315248cb');
        await confirmationPage.confirmReservation();

}

automateFlightReservation();
