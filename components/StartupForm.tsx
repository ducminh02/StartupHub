'use client'

import { useState } from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import MDEditor from '@uiw/react-md-editor'
import { Button } from './ui/button'
import { Send } from 'lucide-react'

const StartupForm = () => {
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [pitch, setPitch] = useState('')

    const handleFormSubmit = () => {}

    const [state, formAction, isPending] = setActionState(handelFormSubmit,
        {
            error: '',
            status: 'INITIAL'
        })

    return (
        <form action={() => {}} className='startup-form'>
            <div>
                <label htmlFor='title' className='startup-form_label'>Title</label>
                <Input
                    id='title'
                    name='title'
                    className='startup-form_input'
                    required
                    placeholder='Startup Title' 
                />

                {errors.title && <p className='startup-form_error'>{errors.title}</p>}

            </div>
            <div>
                <label htmlFor='description' className='startup-form_label'>Description</label>
                <Textarea
                    id='description'
                    name='description'
                    className='startup-form_textarea'
                    required
                    placeholder='Startup Description' 
                />

                {errors.description && <p className='startup-form_error'>{errors.description}</p>}

            </div>
            <div>
                <label htmlFor='category' className='startup-form_label'>
                    Category
                </label>
                <Input
                    id='category'
                    name='category'
                    className='startup-form_input'
                    required
                    placeholder='Startup Category (Tech, Education, Homesharing, etc.)' 
                />

                {errors.category && <p className='startup-form_error'>{errors.cetegory}</p>}

            </div>
            <div>
                <label htmlFor='link' className='startup-form_label'>IMG URL</label>
                <Input
                    id='link'
                    name='link'
                    className='startup-form_input'
                    required
                    placeholder='Startup Link' 
                />

                {errors.title && <p className='startup-form_error'>{errors.title}</p>}

            </div>
            <div data-color-mode='light'>
                <label htmlFor='pitch' className='startup-form_label'>Pitch</label>
                <MDEditor
                    value={pitch}
                    onChange={(value) => setPitch (value as string)}
                    id='pitch'
                    preview='edit'
                    height={300}
                    style={{borderRadius: 20, overflow: 'hidden'}}
                    textareaProps= {{
                        placeholder:
                        'Breifly describe your idea and what problem it solves',
                    }}
                    previewOptions={{
                        disallowedElements: ['style'],
                    }}

                />

                {errors.pitch && <p className='startup-form_error'>{errors.pitch}</p>}


            </div>
            
            <Button type='submit' className='startup-form_btn text-white' disabled={isPending}>
                {isPending ? 'Submitting ...' : 'Submit Your Pitch'}
                <Send className='siye-6 ml-2' />
            </Button>

        </form>
    )
}

export default StartupForm