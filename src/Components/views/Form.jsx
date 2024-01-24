import { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const Form = () => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState("")

    const db = getFirestore()
    const handleSubmit = (e) => {
        e.preventDefault()
        addDoc(ordersCollection, order).then(({ id }) =>
            setOrderId(id))
    }
    const order = {
        nombre,
        email
    }
    const ordersCollection = collection(db, "orden")
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} value={nombre}></input>
                <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email}></input>
                <button type='submit'>Enviar</button>
            </form>
            <p>{orderId}</p>
        </div>
    )
}

export default Form