'use server'

export async function verifyCaptcha(recaptchaToken: string) {
    const verifyResponse = await fetch(
        `https://www.google.com/recaptcha/api/siteverify`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `secret=${process.env.GOOGLE_SECRET_KEY}&response=${recaptchaToken}`
        }
    );

    const verifyData = await verifyResponse.json();
    console.log('Verify Data Captcha:', verifyData);
    // Check score (0.0-1.0, where 1.0 is very likely human)
    if (!verifyData.success || verifyData.score < 0.5) {
        return false
    }
    return true
}