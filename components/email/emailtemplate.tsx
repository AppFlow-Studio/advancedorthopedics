import * as React from 'react';

interface EmailTemplateProps {
    name: string,
    email: string,
    phone: string,
    reason: string,
    bestTime : string
}



export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    email,
    phone,
    reason,
    bestTime,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333', maxWidth: '600px', margin: '0 auto', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
  {/* Header Section - Updated to primary color #022968 */}
  <div style={{ backgroundColor: '#022968', color: 'white', padding: '20px', textAlign: 'center' }}>
    <h1 style={{ margin: '0', fontSize: '24px' }}>Mountain Spine & Orthopedic Center</h1>
  </div>

  {/* Body Section */}
  <div style={{ padding: '20px 30px' }}>
    {/* Updated heading color to primary color #022968 */}
    <h2 style={{ color: '#022968', fontSize: '20px' }}>Thank You for Your Appointment Request!</h2>
    <p>Dear {name},</p>
    <p>
      Thank you for reaching out to Mountain Spine & Orthopedic Center! We're recognized as a leading spine and orthopedic center, and we're here to help you on your journey.
      It's time to start the process of getting your life back from that pain.
    </p>
    <p>
      We have received your appointment request. Our team will be in contact with you soon to confirm the date and time of your visit.
      Please look out for an email, call, or text message from us.
    </p>
    {/* Submitted Information Table */}
    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0' }}>
      <tbody>
        {reason && ( // Conditionally render reason if provided
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '10px 0', fontWeight: 'bold', color: '#555' }}>Reason for Visit:</td>
            <td style={{ padding: '10px 0' }}>{reason}</td>
          </tr>
        )}
        <tr style={{ borderBottom: '1px solid #eee' }}>
          <td style={{ padding: '10px 0', fontWeight: 'bold', color: '#555' }}>Your Preferred Contact Time:</td>
          <td style={{ padding: '10px 0' }}>{bestTime}</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #eee' }}>
          <td style={{ padding: '10px 0', fontWeight: 'bold', color: '#555' }}>Best Contact Email:</td>
          <td style={{ padding: '10px 0' }}>{email}</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #eee' }}>
          <td style={{ padding: '10px 0', fontWeight: 'bold', color: '#555' }}>Best Contact Phone:</td>
          <td style={{ padding: '10px 0' }}>{phone}</td>
        </tr>
      </tbody>
    </table>

    <p>
      We will do our best to reach you during your preferred contact time of <strong>{bestTime}</strong>, using the contact details you provided.
    </p>
    <p>
      If you have any immediate questions, please don't hesitate to contact us at <a href="tel:+1-555-ORTHO-CARE" style={{ color: '#0094E0' }}>(555) ORTHO-CARE</a> or reply to this email. {/* Updated link color to secondary color #0094E0 */}
    </p>
    <p style={{ marginTop: '30px' }}>
      Sincerely,
      <br />
      The Team at Mountain Spine & Orthopedic Center
    </p>
  </div>

  {/* Footer Section */}
  <div style={{ backgroundColor: '#f4f4f4', color: '#777', padding: '15px', textAlign: 'center', fontSize: '12px' }}>
    <p style={{ margin: '0' }}>Mountain Spine & Orthopedic Center</p>
    <p style={{ margin: '0' }}>123 Healthway Drive, Mountain City, MC 54321</p>
    <p style={{ margin: '0' }}>
      {/* Updated link color to secondary color #0094E0 */}
      <a href="https://www.mountainspineortho.example.com" style={{ color: '#0094E0' }}>www.mountainspineortho.example.com</a>
    </p>
  </div>
</div>
);