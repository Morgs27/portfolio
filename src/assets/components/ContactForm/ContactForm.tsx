import { useForm, ValidationError } from '@formspree/react';
import './contact.scss';
import { BsFillSendFill } from 'react-icons/bs';
import {AiOutlineCheck} from 'react-icons/ai'
import { useRef } from 'react';

export default function ContactForm() {

  const [state, handleSubmit] = useForm("meqwlvzp");

  const mainForm = useRef(null);
  const success = useRef(null);

  if (state.succeeded) {
    return(
      <>
      <p className='emailConfirmed'>Email succesfully sent <AiOutlineCheck></AiOutlineCheck></p>
      <p style={{fontSize: '12px', opacity: 0.6}}>Thanks for taking the time to reach out!</p>
      </>
    )
  }
  else {

  return (
    
    <form onSubmit={handleSubmit}>

      <div className="title">Feel free to send me an email...</div>
      <div className="field-holder">
        <div className="field">
            <input
                placeholder='Name'
                id="name"
                type="string" 
                name="name"
            />
            <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
            />
        </div>
        <div className="field">
            <input
                placeholder='Email'
                id="email"
                type="email" 
                name="email"
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
        </div>
      </div>
      <div className="field">
        <textarea
            placeholder='Message'
            id="message"
            name="message"
        />
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
        />
      </div>
        <button id = 'submitButton' type="submit" disabled={state.submitting}>
            Send <BsFillSendFill></BsFillSendFill>
        </button>
    </form>
  );
  }
}