export const SITE_URL = process.env.SITE_URL || 'https://www.boa.bo/';
export const selectors = {
    reservaVuelos: '#reserva_vuelos',
    origin: '#select_desde.origen-destino',
    destination: '#select_hasta.origen-destino',
    onlyOneWay: '#rbtn_ida.radio-button',
    calendar: "[id='picker_salida']",
    chosenDate: 'a:has-text("30")',
    searchFlightButton: '#btn_buscar_vuelos',
    chosenFlight: '#vuelosIda_1 .desc_familias',
    chosenTicket: 'div.cajaFamilia',
    confirmTicketButton: '//div[2]/div[1]/div[3]//table[4]//tr//div',
    passengerName: '#tbx_px1_nombres',
    passengerLastName: '#tbx_px1_apellidos',
    email: '#tbx_px1_email',
    phone: '#tbx_px1_telefono',
    documentType: '#select_px1_tipo_documento',
    documentId: '#tbx_px1_documento',
    confirmReservationButton: '//div[2]/div[1]/div[4]/div/table//tr//div', 
};
