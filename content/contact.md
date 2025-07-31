---
title: "Contact"
description: "Get in touch for print orders, or licensing inquiries"
date: 2025-07-31
showToc: false
hidemeta: true
comments: false
---

I'd love to hear from you! Whether you're interested in purchasing prints, or licensing images, please don't hesitate to reach out.

## Photography Services
- Print sales and licensing
- Digital downloads

## Get In Touch

{{< rawhtml >}}

<form action="https://formspree.io/f/xjkooaln" method="POST" class="contact-form">
  <div class="form-group">
    <label for="name">Name *</label>
    <input type="text" name="name" id="name" required>
  </div>
  
  <div class="form-group">
    <label for="email">Email *</label>
    <input type="email" name="email" id="email" required>
  </div>
  
  <div class="form-group">
    <label for="subject">Subject</label>
    <select name="subject" id="subject" required>
      <option value="" disabled selected>Select a subject</option>
      <option value="print-inquiry">Print Purchase</option>
      <option value="licensing">Image Licensing</option>
      <option value="general">General Inquiry</option>
    </select>
  </div>
  
  <div class="form-group">
    <label for="message">Message *</label>
    <textarea name="message" id="message" rows="6" required placeholder="Please describe your inquiry in detail..."></textarea>
  </div>
  
  <!-- Hidden fields for better organization -->
  <input type="hidden" name="_subject" value="New inquiry from Doug Obert Photography website">
  <input type="hidden" name="_next" value="https://dougobert.github.io/contact?submitted=true">
  
  <button type="submit" class="contact-submit-btn">Send Message</button>
</form>

<div id="success-message" style="display: none;" class="success-message">
  <h3>Thank you!</h3>
  <p>Your message has been sent successfully. I'll get back to you as soon as possible.</p>
</div>

{{< /rawhtml >}}

