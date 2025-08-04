import * as React from 'react';

interface EmailTemplateProps {
  name: string,
  email: string,
  phone: string,
  reason: string,
  bestTime: string
}



export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phone,
  reason,
  bestTime,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333', margin: '0 auto', border: '1px solid #ddd', borderRadius: '8px', height: '100%' }}>
    {/* Header Section - Updated to primary color #022968 */}
    <div style={{ backgroundColor: '#0094E0', color: 'white', padding: '20px', textAlign: 'center' }} className='flex flex-row items-center justify-center'>
      {/* Logo added as per user's updated code */}
      <img src="https://mountainspineortho.b-cdn.net/newlogo4.png" alt="Mountain Spine & Orthopedic Center" style={{ width: '100px' }} />
      <h1 style={{ fontSize: '24px', color: 'white' }}>Mountain Spine & Orthopedics</h1>
    </div>

    {/* Body Section */}
    <div style={{ padding: '20px 30px' }}>
      {/* Updated heading color to primary color #022968 */}
      <h2 style={{ color: '#022968', fontSize: '20px' }}>Thank You for Your Appointment Request!</h2>
      <p style={{ color: 'black' }}>Dear {name},</p>
      <p style={{ color: 'black' }}>
        Thank you for reaching out to Mountain Spine & Orthopedics! We're recognized as a leading spine and orthopedic center, and we're here to help you on your journey.
        It's time to start the process of getting your life back from that pain.
      </p>
      <p style={{ color: 'black' }}>
        We have received your appointment request. Our team will be in contact with you soon to confirm the date and time of your visit.
        Please look out for an email, call, or text message from us.
      </p>
      {/* Submitted Information Table */}
      <table style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0' }}>
        <tbody>
          <tr style={{ borderBottom: '1px solid #eee', justifyContent: 'space-evenly', width: '100%' }}>
            <td style={{ padding: '10px 0', fontWeight: 'bold', color: '#555', width: '30%', verticalAlign: 'top' }}>Your Preferred Contact Time:</td>
            <td style={{ padding: '10px 0' }}>{bestTime}</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee', justifyContent: 'space-evenly', width: '100%' }}>
            <td style={{ padding: '10px 0', fontWeight: 'bold', color: '#555', verticalAlign: 'top' }}>Best Contact Email:</td>
            <td style={{ padding: '10px 0' }}>{email}</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee', justifyContent: 'space-evenly', width: '100%' }}>
            <td style={{ padding: '10px 0', fontWeight: 'bold', color: '#555', verticalAlign: 'top' }}>Best Contact Phone:</td>
            <td style={{ padding: '10px 0' }}>{phone}</td>
          </tr>
        </tbody>
      </table>

      {/* Consultation Reason Section - Moved outside the table */}
      {reason && (
        <div style={{ marginTop: '20px', marginBottom: '20px' }}>
          <h3 style={{ color: '#022968', fontSize: '18px', margin: '0 0 10px 0', fontWeight: 'bold' }}>Consultation Reason:</h3>
          <div style={{ maxHeight: '150px', maxWidth: '100%', overflowY: 'scroll', padding: '10px', border: '1px solid #eee', borderRadius: '4px', backgroundColor: '#f9f9f9' }}>
            {reason}
          </div>
        </div>
      )}

      <p style={{ color: 'black' }}>
        We will do our best to reach you during your preferred contact time of <strong>{bestTime}</strong>, using the contact details you provided.
      </p>
      <p style={{ color: 'black' }}>
        If you have any immediate questions, please don't hesitate to contact us at <a href="tel:5612239959" style={{ color: '#0094E0' }}>(561) 223-9959</a> or reply to this email. {/* Updated link color to secondary color #0094E0 */}
      </p>
      <p style={{ marginTop: '30px', color: 'black' }}>
        Sincerely,
        <br />
        The Team at Mountain Spine & Orthopedics
      </p>
    </div>

    {/* Footer Section */}
    <div style={{ backgroundColor: '#f4f4f4', color: '#777', padding: '15px', textAlign: 'center', fontSize: '12px' }}>
      {/* <p style={{ margin: '0' }}>Mountain Spine & Orthopedic Center</p>
      <p style={{ margin: '0' }}>123 Healthway Drive, Mountain City, MC 54321</p>
      <p style={{ margin: '0' }}>

        <a href="https://mountainspineorthopedics.com" style={{ color: '#0094E0' }}>www.mountainspineorthopedics.com</a>
      </p> */}
    </div>
  </div>
);
