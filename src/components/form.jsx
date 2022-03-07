import { useForm } from 'react-hook-form'

const Form = () => {
    const {register, handleSubmit, formState: { errors }} = useForm()

    const onSubmit = data => {
        console.log(data)
    }

    const createOrder = () => {
        alert('Need to save order for')
    }

    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email: </label>
            <input type='email' placeholder='Email' name='email' {...register('email')} />
            <label htmlFor="name">Name: </label>
            <input type='text' placeholder='Name' name='name' {...register('name')} />
            <label htmlFor="address">Address: </label>
            <input
                type='text'
                placeholder='Address'
                name='address'
                />
            <input type='submit' className='submit-input' onClick={() => createOrder()}/>
        </form>
     );
}
 
export default Form;