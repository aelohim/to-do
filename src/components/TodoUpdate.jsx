import React from 'react'
import { FaEdit } from 'react-icons/fa'

export const TodoUpdate = () => {
  return (
    <form>
            <input type="text" className='input-update' name='description' placeholder='Que hay que hacer?' />
            <button className='btn-edit' type='submit' >
                <FaEdit></FaEdit>
            </button>
        </form>
  )
}
