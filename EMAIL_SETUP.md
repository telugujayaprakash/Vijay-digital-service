# Email Setup for Contact Form

## Prerequisites

1. **Gmail Account**: You need a Gmail account to send emails
2. **App Password**: Gmail requires an app password for third-party applications

## Setup Instructions

### 1. Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification

### 2. Generate App Password
1. In Security settings, find "App passwords"
2. Click on "App passwords"
3. Select "Mail" and "Other (custom name)"
4. Enter "Vijay Digital Services" as the name
5. Click "Generate"
6. Copy the 16-character password

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password

# Server Configuration
PORT=3001
```

Replace:
- `your-email@gmail.com` with your Gmail address
- `your-16-character-app-password` with the app password you generated

### 4. Install Dependencies

```bash
npm install
```

### 5. Start the Server

For development (runs both frontend and backend):
```bash
npm run dev:full
```

For production:
```bash
npm run build
npm run server
```

## How It Works

1. **Contact Form Submission**: User fills out the form
2. **Email to Business**: You receive the inquiry details
3. **Auto-Reply**: User gets a confirmation email
4. **Error Handling**: Proper error messages if something fails

## Security Notes

- Never commit the `.env` file to version control
- The app password is specific to this application
- You can revoke app passwords anytime from Google Account settings
- Consider using OAuth2 for production applications

## Troubleshooting

- **"Authentication failed"**: Check your app password
- **"Invalid login"**: Ensure 2FA is enabled and app password is correct
- **Emails not sending**: Check Gmail security settings and spam folder
