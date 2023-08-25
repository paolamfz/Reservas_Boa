import { Page } from 'playwright';
import { selectors } from '../config/siteConfig';

class ConfirmacionReservaPage {
    constructor(private page: Page) {}

    async clickPasajeCajaSeleccionado() {
        await this.page.locator(selectors.pasajeCajaSeleccionado).nth(1).click();
    }

    async clickConfirmarPasaje() {
        await this.page.click(selectors.confirmarPasajeButton);
        await this.page.pause();
    }

    async completarDatosPasajero(nombre: string, apellido: string, email: string, telefono: string) {
        await this.page.fill(selectors.nombrePasajero, nombre);
        await this.page.fill(selectors.apellidoPasajero, apellido);
        await this.page.fill(selectors.emailPasajero, email);
        await this.page.fill(selectors.telefonoPasajero, telefono);
    }

    async seleccionarTipoDocumentoYNumero(tipoDocumento: string, numeroDocumento: string) {
        await this.page.selectOption(selectors.tipoDocumento, tipoDocumento);
        await this.page.fill(selectors.numeroDocumento, numeroDocumento);
    }

    async confirmarReserva() {
        await this.page.click(selectors.confirmarReservaButton);
        await this.page.waitForTimeout(10000);
    }
}

export default ConfirmacionReservaPage;
