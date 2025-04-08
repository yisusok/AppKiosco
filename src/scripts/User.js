// VER COMO CONECTAR A USER CON INVENTRAIO

class Usuario {
    constructor(fotoPerfil, nombreUsuario, contraseña) {
        this._fotoPerfil = fotoPerfil;
        this._nombreUsuario = nombreUsuario;
        this._contraseña = contraseña;
    }

    getFotoPerfil() {
        return this._fotoPerfil;
    }

    getNombreUsuario() {
        return this._nombreUsuario;
    }

    getContraseña() {
        return this._contraseña;
    }

    setFotoPerfil(nuevaFoto) {
        this._fotoPerfil = nuevaFoto;
    }

    setNombreUsuario(nuevoNombre) {
        this._nombreUsuario = nuevoNombre;
    }

    setContraseña(nuevaContra) {
        this._contraseña = nuevaContra;
    }
}
