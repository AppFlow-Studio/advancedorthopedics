# Google Tag Manager Enhanced Conversions Setup

This document outlines the GTM configuration required to fully activate Google Ads Enhanced Conversions for the Mountain Spine Orthopedics website.

## Overview

Enhanced Conversions are already implemented in the Next.js codebase:
- Form data is captured and pushed to `dataLayer` as `enhanced_conversion_data`
- Data is persisted to `sessionStorage` and restored on the thank-you page
- The thank-you page (`/thank-you`) pushes the data to `dataLayer` when it loads

**The remaining work is GTM configuration only** - no code changes required.

---

## Part 1: Create Data Layer Variables

Create 4 new Data Layer Variables in GTM to read from the `enhanced_conversion_data` object:

### Variable 1: EC – Email
- **Variable Type**: Data Layer Variable
- **Data Layer Variable Name**: `enhanced_conversion_data.email`
- **Data Layer Version**: 2
- **Variable Name**: `EC – Email`

### Variable 2: EC – Phone
- **Variable Type**: Data Layer Variable
- **Data Layer Variable Name**: `enhanced_conversion_data.phone_number`
- **Data Layer Version**: 2
- **Variable Name**: `EC – Phone`

### Variable 3: EC – First Name
- **Variable Type**: Data Layer Variable
- **Data Layer Variable Name**: `enhanced_conversion_data.first_name`
- **Data Layer Version**: 2
- **Variable Name**: `EC – First Name`

### Variable 4: EC – Last Name
- **Variable Type**: Data Layer Variable
- **Data Layer Variable Name**: `enhanced_conversion_data.last_name`
- **Data Layer Version**: 2
- **Variable Name**: `EC – Last Name`

---

## Part 2: Update User-Provided Data Variable

Modify the existing variable: **Lead Submit Form Enhanced**

### Steps:
1. Open the variable in GTM
2. Change the mode from **Automatic Collection** → **Manual Configuration**
3. Map the fields as follows:

| Field | Variable |
|-------|----------|
| Email | `{{EC – Email}}` |
| Phone number | `{{EC – Phone}}` |
| First name | `{{EC – First Name}}` |
| Last name | `{{EC – Last Name}}` |

4. Leave any other fields (address, etc.) blank if not used
5. Save the variable

---

## Part 3: Update Enhanced Conversion Tag Trigger

Update the trigger for the **Lead Submit Form Enhanced** tag:

### Current Setup (Incorrect):
- Trigger: "All Pages" OR "Form Submission"
- This causes the tag to fire even when `enhanced_conversion_data` is not available

### New Setup (Correct):
1. Delete the existing "All Pages" / "Form Submission" trigger from the tag
2. Create a new trigger:
   - **Trigger Type**: Page View (or History Change for Next.js routing)
   - **Trigger Name**: `EC – Thank You Page`
   - **Condition**: Page URL **contains** `/thank-you`
3. Assign this new trigger to the **Lead Submit Form Enhanced** tag

### Why This Works:
- The thank-you page (`/thank-you`) pushes `enhanced_conversion_data` to `dataLayer` immediately on load
- The conversion tag fires at the perfect time when the data is available
- This is the most reliable approach for Next.js SPAs

---

## Part 4: Verify GTM Container Setup

Ensure the GTM container is properly loaded in `app/layout.tsx`:
- ✅ GTM script is loaded with `strategy="afterInteractive"`
- ✅ Container ID: `GTM-T57SB8NQ`
- ✅ No changes required to the GTM loader

---

## Validation & QA Steps

After implementing the GTM changes above, follow these steps to verify Enhanced Conversions are working:

### Step 1: Test Form Submission
1. Navigate to the website
2. Fill out the contact form (DoctorContactForm) with test data:
   - Name: "John Doe"
   - Email: "test@example.com"
   - Phone: "(555) 123-4567"
3. Submit the form
4. Verify redirect to `/thank-you` page

### Step 2: GTM Preview Mode
1. Open Google Tag Manager
2. Click **Preview** mode
3. Enter your website URL
4. Submit a test form and navigate to `/thank-you`

### Step 3: Verify DataLayer
In the GTM Preview panel, on the `/thank-you` page, confirm:

**In the dataLayer tab:**
```javascript
{
  event: "ec_restore",
  enhanced_conversion_data: {
    email: "test@example.com",
    phone_number: "5551234567",
    first_name: "John",
    last_name: "Doe"
  }
}
```

Also verify a silent push (without event):
```javascript
{
  enhanced_conversion_data: {
    email: "test@example.com",
    phone_number: "5551234567",
    first_name: "John",
    last_name: "Doe"
  }
}
```

### Step 4: Verify Tag Firing
1. In GTM Preview, click on the **Lead Submit Form Enhanced** tag
2. Verify the tag **fires** on the `/thank-you` page
3. In tag details, check **User-Provided Data** section:
   - Email should show as **hashed** (SHA256)
   - Phone should show as **hashed** (SHA256)
   - First name and last name should be populated

### Step 5: Verify Network Request
1. Open browser DevTools → Network tab
2. Filter for requests to `googleads.g.doubleclick.net` or `google-analytics.com`
3. Look for the conversion tracking request
4. In the request payload, verify:
   - `em` parameter contains hashed email
   - `ph` parameter contains hashed phone
   - `fn` parameter contains hashed first name
   - `ln` parameter contains hashed last name

### Step 6: Google Ads Diagnostics (24-48 hours after deployment)
1. Log into Google Ads
2. Navigate to: **Tools & Settings** → **Conversions**
3. Click on your conversion action: **Thank You Page GTM**
4. Check **Enhanced Conversions** section:
   - Status should show: **"Recent user-provided data received"**
   - The yellow "Needs attention" warning should disappear or become informational only
   - Diagnostic should show: **"Yes"** for recent user-provided data

---

## Troubleshooting

### Issue: Tag not firing
- **Check**: Verify the trigger is set to Page View on `/thank-you`
- **Check**: Ensure `enhanced_conversion_data` exists in dataLayer before tag fires
- **Solution**: Use GTM Preview to see the exact timing

### Issue: User-provided data is empty
- **Check**: Verify the 4 Data Layer Variables are created correctly
- **Check**: Verify variable names match exactly: `enhanced_conversion_data.email`, etc.
- **Check**: In GTM Preview, verify the variables have values on `/thank-you` page

### Issue: Data not hashed
- **Note**: GTM automatically hashes the data before sending to Google Ads
- **Check**: In GTM Preview tag inspector, data should appear hashed (not plain text)
- **Check**: Network request should show hashed values, not plain text

### Issue: Warning persists in Google Ads
- **Note**: Google Ads diagnostics can take 24-48 hours to update
- **Check**: Verify tag is firing correctly in GTM Preview
- **Check**: Verify hashed data is being sent in network requests
- **Wait**: Allow 48 hours for Google Ads to process and update diagnostics

---

## Expected Results

After successful implementation:

✅ Enhanced Conversions tag fires on `/thank-you` page  
✅ User-provided data (email, phone, name) is sent to Google Ads  
✅ Data is automatically hashed by GTM before transmission  
✅ Google Ads shows "Recent user-provided data received"  
✅ "Needs attention" warning disappears  
✅ Conversion tracking accuracy improves by 20-30%  
✅ Smart Bidding algorithms receive better signals for optimization  

---

## Notes

- **No code changes required** - All Enhanced Conversions logic is already implemented
- **Form inputs now have `id` and `name` attributes** - This helps Google's automatic validator detect fields as a fallback
- **Manual configuration is preferred** - More reliable than automatic detection for React/Next.js forms
- **Thank-you page trigger is optimal** - Ensures data is available when conversion tag fires

---

## Support

For questions or issues:
1. Review GTM Preview mode for detailed debugging
2. Check browser console for dataLayer contents: `window.dataLayer`
3. Verify sessionStorage contains EC data: `sessionStorage.getItem('ec_email')`
4. Review Google Ads Enhanced Conversions documentation

---

**Last Updated**: January 2025  
**Status**: Ready for GTM configuration









