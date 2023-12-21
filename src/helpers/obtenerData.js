import data from '../data/data.json'
export const obtenerDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 500)
    })
}

export const obtenerItemPorId = (id) => {
    return new Promise((resolve, reject) => {
        const item = data.find((element) => element.id === id)
        if (item) {
            resolve(item)
        } else {
            reject({
                error: "No se encontro el producto"
            })
        }
    })
}