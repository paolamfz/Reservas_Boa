import { chromium, Browser, Page, LaunchOptions, BrowserContextOptions } from 'playwright';
import dotenv from 'dotenv';
import { SITE_URL } from '../config/siteConfig';
import { navigateTo } from '../utils/helpers';
import ReservaVuelosPage from './reservaVuelosPage'; 
import ConfirmacionReservaPage from './ConfirmacionReservaPage';
dotenv.config();

async function automateFlightReservation() {
    const browserOptions: LaunchOptions = { headless: false };
    const contextOptions: BrowserContextOptions = {};

       const browser = await chromium.launch(browserOptions);
        const context = await browser.newContext(contextOptions);
        const page: Page = await context.newPage();

        await navigateTo(SITE_URL, page);

        const reservaPage = new ReservaVuelosPage(page);
        const confirmacionPage = new ConfirmacionReservaPage(page);

        await reservaPage.selectOrigen('COCHABAMBA');
        await reservaPage.selectDestino('LA PAZ');
        await reservaPage.selectSoloIda();
        await reservaPage.chooseFechaSalida();
        await reservaPage.clickBuscarVuelos();

        await confirmacionPage.clickPasajeCajaSeleccionado();
        await confirmacionPage.clickConfirmarPasaje();
        await confirmacionPage.completarDatosPasajero('Paola', 'Montano', 'montanofernandezpaola@gmail.com', '79373947');
        await confirmacionPage.seleccionarTipoDocumentoYNumero('CI', '9315248cb');
        await confirmacionPage.confirmarReserva();

}

automateFlightReservation();
