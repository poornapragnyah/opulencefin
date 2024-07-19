// components/ContactFormPopup.tsx
import React from 'react';

const ContactFormPopup: React.FC = () => {
  return (
    <>
      <input type="checkbox" id="contact-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Contact Us</h3>
          <form className="mt-4">
            <div className="form-control">
              <label className="label" htmlFor="name">
                <span className="label-text">Name</span>
              </label>
              <input type="text" id="name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input type="email" id="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="message">
                <span className="label-text">Message</span>
              </label>
              <textarea id="message" className="textarea textarea-bordered"></textarea>
            </div>
            <div className="modal-action">
              <label htmlFor="contact-modal" className="btn">Close</label>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactFormPopup;
