import { useForm, ValidationError } from '@formspree/react';
import './contact.scss';

export default function ContactForm() {

  const [state, handleSubmit] = useForm("meqwlvzp");

  if (state.succeeded) {
      return (
        <p>Thanks for joining!</p>
      );
  }

  return (
    <form onSubmit={handleSubmit}>
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
        <button type="submit" disabled={state.submitting}>
            Submit
        </button>

    </form>
  );
}