import {render, screen} from '@testing-library/react'
import React from 'react';
import Form from "./form";
// Function passed in from props

describe('Form', ()=>{
    it('should add todo button should be disabled by default', async()=>{
        render(<Form/>);
        const addTodoButton = screen.getByText('Add Todo');
        expect(addTodoButton.closest('button')).toBeInTheDocument();
        console.log(addTodoButton.closest('button')?.attributes);
        expect(addTodoButton.closest('button')).toHaveAttribute('disabled');
    })
})

