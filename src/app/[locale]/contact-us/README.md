# Contact Us Page

## Features

### ✅ Form Validation
- **Name validation**: Required, minimum 2 characters
- **Email validation**: Required, valid email format
- **Phone validation**: Required, valid phone format (8+ digits)
- **Real-time error display**: Errors shown below each field
- **Clear errors on input**: Errors disappear when user starts typing

### ✅ Form States
1. **Idle State**: Default state with teal submit button
2. **Submitting State**: Gray button with "Sending..." text, form disabled
3. **Success State**: Green button, success notification, form reset after 3 seconds
4. **Error State**: Red button, error notification, validation errors displayed

### ✅ Notifications
- **Success notification**: Green background with checkmark icon
- **Error notification**: Red background with alert icon
- **Copy email notification**: Shows when email is copied to clipboard
- **Auto-dismiss**: Notifications disappear after 5 seconds
- **Slide-in animation**: Smooth entrance from right side

### ✅ Copy Email Functionality
- Click "Copy My Email" button to copy email to clipboard
- Success notification confirms copy action
- Error notification if clipboard access fails

### ✅ Internationalization (i18n)
- Full support for English and Arabic
- RTL support for Arabic
- All text content translated
- Form validation messages in both languages

### ✅ Responsive Design
- Mobile-first approach
- Grid layout adjusts for different screen sizes
- Touch-friendly buttons and inputs
- Optimized for all devices

### ✅ Accessibility
- Proper ARIA labels
- Keyboard navigation support
- Screen reader friendly
- Focus states on all interactive elements

## Components Structure

```
contact-us/
├── page.tsx                    # Main page component
└── components/
    ├── ContactInfo.tsx         # Hero section with copy email
    ├── ContactForm.tsx         # Form with validation
    ├── ContactLocations.tsx    # Global locations grid
    └── ContactFooter.tsx       # Business enquiry section
```

## Usage

Navigate to `/en/contact-us` or `/ar/contact-us` to view the page.
