import { Page } from 'playwright';
import { selectors } from '../config/siteConfig';

class ReservaVuelosPage {
    constructor(private page: Page) {}

    async selectOrigen(destination: string) {
        await this.page.selectOption(selectors.origen, destination);
    }

    async selectDestino(destination: string) {
        await this.page.selectOption(selectors.destino, destination);
        await this.page.waitForLoadState();
    }

    async selectSoloIda() {
        await this.page.click(selectors.soloIda);
    }

    async chooseFechaSalida() {
        await this.page.click(selectors.calendario);
        await this.page.locator(selectors.diaEscogido).nth(1).click();
    }

    async clickBuscarVuelos() {
        await this.page.click(selectors.buscarVuelosButton);
        await this.page.waitForLoadState();
    }
}

export default ReservaVuelosPage;
