// Contact Form Enhancement Script
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    const successMessage = document.getElementById('success-message');
    
    if (!contactForm) return;
    
    // Check if form was submitted successfully (from URL parameter)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('submitted') === 'true') {
        contactForm.style.display = 'none';
        successMessage.style.display = 'block';
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Remove the parameter from URL
        const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);
    }
    
    // Form submission handling
    contactForm.addEventListener('submit', function(e) {
        const submitBtn = contactForm.querySelector('.contact-submit-btn');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        contactForm.classList.add('submitting');
        
        // Reset button after a delay if form doesn't redirect
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            contactForm.classList.remove('submitting');
        }, 5000);
    });
    
    // Real-time validation feedback
    const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });
    
    function validateField(field) {
        const isValid = field.checkValidity();
        field.classList.toggle('error', !isValid);
        
        // Remove any existing error message
        const existingError = field.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Add error message if invalid
        if (!isValid && field.value.trim() !== '') {
            const errorMsg = document.createElement('div');
            errorMsg.className = 'error-message';
            errorMsg.style.color = '#dc3545';
            errorMsg.style.fontSize = '14px';
            errorMsg.style.marginTop = '5px';
            
            if (field.type === 'email') {
                errorMsg.textContent = 'Please enter a valid email address';
            } else {
                errorMsg.textContent = 'This field is required';
            }
            
            field.parentNode.appendChild(errorMsg);
        }
    }
    
    // Enhanced form validation on submit
    contactForm.addEventListener('submit', function(e) {
        let isFormValid = true;
        
        inputs.forEach(input => {
            if (!input.checkValidity()) {
                validateField(input);
                isFormValid = false;
            }
        });
        
        if (!isFormValid) {
            e.preventDefault();
            
            // Focus on first invalid field
            const firstInvalid = contactForm.querySelector('input:invalid, textarea:invalid');
            if (firstInvalid) {
                firstInvalid.focus();
                firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });
    
    // Auto-resize textarea
    const textarea = contactForm.querySelector('textarea');
    if (textarea) {
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = Math.max(120, this.scrollHeight) + 'px';
        });
    }
});
