import React from 'react';
import { useImmer } from 'use-immer';

export default function Intro() {
    const [form, updatePerson] = useImmer({
        name: '',
        email: '',
        id: 1,
    });
    const handleChange = e => {
        const { name, value } = e.target;

        e.preventDefault();
        updatePerson({
            [name]: value
        })
    }
    return (
        <>
        <form>
            <label htmlFor="name">name</label>
            <input type="text" name='name' value={form.name} onChange={handleChange}/>
            <label htmlFor="email">email</label>
            <input type="text" name='email' value={form.email} onChange={handleChange}/>
        </form>
        </>
    );
}

