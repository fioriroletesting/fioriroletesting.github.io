---
<<<<<<< HEAD
title: Get offer
=======
title: Contact Us
>>>>>>> 466ebb7... docs: %*
description: Get in touch.
nype_config:
  js_include: contact_form_action_hex contact_form_email_hex
---
<<<<<<< HEAD
# Offer Form

Contact us on <span class="nype-code-button nype-show-email">`Show e-mail`</span> or fill out the form below.
=======
# Contact Form

<<<<<<<< HEAD:docs/offer.md
Contact us by filling out the form below.
========
Contact us on <span class="nype-code-button nype-show-email">`Show e-mail`</span> or fill out the form below.
>>>>>>>> 466ebb7... docs: %*:docs/contact.md
>>>>>>> 466ebb7... docs: %*

<div class="nype-form-wrapper">
    <form class="nype-form" method="POST">
        <label for="fullname">Full Name:</label>
        <input 
            class="md-input" 
            id="fullname"
            name="fullname"
            placeholder="Input your name"
            required
            type="text"
        >
        <label for="companyname">Company Name:</label>
        <input 
            class="md-input" 
            id="companyname"
            name="companyname"
            placeholder="Input your company name"
            required
            type="text"
        >
        <label for="email">E-mail:</label>
        <input
            autocomplete="email"
            class="md-input"
            id="email"
            name="email"
            placeholder="Input your e-mail"
            required
            type="email"
        >
        <label for="message">What can we do for you?:</label>
        <textarea
            class="md-input"
            id="message"
            name="message"
            placeholder="Input your message"
            required
        ></textarea>
        <button 
            class="md-button md-button--primary"
            type="submit"
        >Submit</button>
    </form>
</div>