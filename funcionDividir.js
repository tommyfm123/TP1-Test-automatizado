const Dividir = (a, b) => {
    if (b === 0) {
        if (a === 0) {
            return 0;
        } else {
            throw new Error('No se puede dividir por cero');
        }
    }
    return a / b;
}

export default Dividir;
