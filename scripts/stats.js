// CONECTAR REPORTES CON STATS

class Estadistica {
    constructor() {
        this.reportes = [];
    }

    agregarReporte(reporte) {
        this.reportes.push(reporte);
    }

    obtenerMayorPrecioFinal() {
        if (this.reportes.length === 0) return 0;
        return Math.max(...this.reportes.map(r => r.precioFinal));
    }
}
