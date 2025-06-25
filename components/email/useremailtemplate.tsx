import Image from "next/image"
import { MapPin, ChevronDown, ChevronUp, Globe } from "lucide-react"
import { clinics, ClinicsProps } from "@/components/data/clinics"
interface UserEmailProps {
  name: string,
  email: string,
  phone: string,
}
const textSizes = {
  xs: { fontSize: '12px', lineHeight: '16px' },
  sm: { fontSize: '14px', lineHeight: '20px' },
  base: { fontSize: '16px', lineHeight: '24px' },
  lg: { fontSize: '18px', lineHeight: '28px' },
  xl: { fontSize: '20px', lineHeight: '28px' },
  '2xl': { fontSize: '24px', lineHeight: '32px' },
};

export const UserEmailTemplate: React.FC<Readonly<UserEmailProps>> = ({ name, email, phone }: { name: string, email: string, phone: string }) => {
  return (
    <div style={{ width: "100%", fontFamily: 'Arial, sans-serif' }}> {/* p-6 */}
      {/* Email Preview */}
      <div style={{
        border: '1px solid #e5e7eb', /* border border-gray-200 */
        borderRadius: '8px', /* rounded-lg */
        overflow: 'hidden' /* overflow-hidden */
      }}>
        {/* Email Body */}
        <div style={{
          backgroundColor: '#f9fafb', /* bg-gray-50 */
          padding: '16px'
        }}>
          {/* Logo Header */}
          <div style={{ textAlign: 'start', marginBottom: '24px' }}> {/* text-center mb-6 */}
            <img
              src="https://mountainspineortho.b-cdn.net/mso.png"
              alt="Mountain Spine & Orthopedics"
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '100%',
                height: '300px',
                objectFit: 'fill',
                borderRadius: '8px'
              }}
            />
          </div>

          {/* Main Content */}
          <div style={{
            backgroundColor: '#ffffff', /* bg-white */
            padding: '24px', /* p-6 */
            borderRadius: '8px', /* rounded-lg */
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' /* shadow-sm */
          }}>
            <h1 style={{
              fontSize: textSizes['2xl'].fontSize, /* text-2xl */
              lineHeight: textSizes['2xl'].lineHeight,
              fontWeight: '700', /* font-bold */
              color: '#0094E0', /* text-[#0094E0] */
              marginBottom: '16px' /* mb-4 */
            }}>Thank You for Your Submission</h1>

            <p style={{ color: '#374151', marginBottom: '16px' }}>Dear {name},</p> {/* text-gray-700 mb-4 */}

            <p style={{ color: '#374151', marginBottom: '16px' }}> {/* text-gray-700 mb-4 */}
              Thank you for submitting your information through our website. We appreciate you trusting Mountain
              Spine & Orthopedics with your orthopedic and spine care needs.
            </p>

            {/* Info Box */}
            <div style={{
              backgroundColor: '#f9fafb', /* bg-gray-50 */
              borderLeft: '4px solid #0094E0', /* border-l-4 border-[#0094E0] */
              padding: '16px', /* p-4 */
              borderRadius: '4px', /* Tailwind's default rounded is slightly different from rounded-md, etc. p-4 often comes with rounded. Assuming it's a small radius */
              marginBottom: '24px' /* mb-6 */
            }}>
              <h3 style={{
                fontWeight: '700', /* font-bold */
                color: '#0094E0', /* text-[#0094E0] */
                marginBottom: '8px' /* mb-2 */
              }}>What Happens Next:</h3>
              <p style={{ color: '#374151', marginBottom: '4px' }}>1. Our team is reviewing your information</p> {/* text-gray-700 mb-1 */}
              <p style={{ color: '#374151', marginBottom: '4px' }}>2. A staff member will contact you shortly</p> {/* text-gray-700 mb-1 */}
              <p style={{ color: '#374151' }}>3. We'll help schedule your appointment or address your inquiry</p> {/* text-gray-700 */}
            </div>

            <p style={{ color: '#374151', marginBottom: '24px' }}> {/* text-gray-700 mb-6 */}
              If you need immediate assistance, please call our main office at{" "}
              <span style={{ color: '#0094E0', fontWeight: '500' }}><a href="tel:5612239959">(561) 223-9959</a></span>. {/* text-[#0094E0] font-medium */}
            </p>

            <hr style={{ borderColor: '#e5e7eb', marginTop: '24px', marginBottom: '24px' }} /> {/* border-gray-200 my-6 */}

            {/* Locations Section */}
            <div style={{ marginBottom: '24px' }}> {/* mb-6 from outer div */}

              <div style={{ marginBottom: '24px' }}> {/* This was already in your provided snippet with inline styles */}
                <h3 style={{
                  fontSize: '20px', /* text-xl equivalent */
                  fontWeight: '700', /* font-bold */
                  color: '#0094E0',
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <img src="https://mountainspineortho.b-cdn.net/Image%20from%20resg.hahana.shop.png" alt="Location" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
                  Our Locations
                </h3>

                {clinics.slice(0, 3).map((clinic) => (
                  <div style={{
                  }}>
                    <div style={{
                      backgroundColor: '#f9fafb',
                      paddingLeft: '16px',
                      paddingRight: '16px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      borderRadius: '8px'
                    }}>
                      <h4 style={{
                        fontWeight: '700',
                        color: '#1f2937',
                        fontSize: textSizes['lg'].fontSize
                      }}>{clinic.region}</h4>
                    </div>
                    <div style={{
                      paddingLeft: '16px',
                      paddingRight: '16px',
                      paddingTop: '8px',
                      paddingBottom: '8px'
                    }}>
                      <p style={{
                        color: '#374151',
                        fontSize: '14px'
                      }}>{clinic.address}</p>
                      <p style={{
                        color: '#374151',
                        fontSize: '14px',
                        marginTop: '4px'
                      }}>
                        <span style={{
                          fontWeight: '500'
                        }}>Phone:</span> {clinic.phone}
                      </p>
                      <p style={{
                        color: '#374151',
                        fontSize: '14px'
                      }}>
                        <span style={{
                          fontWeight: '500'
                        }}>Hours:</span> Mon-Fri: 8am-5pm
                      </p>
                    </div>
                  </div>
                ))}
                <a href="https://mountainspineorthopedics.com/locations" style={{
                  backgroundColor: '#f9fafb',
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  borderRadius: '8px'
                }}>
                  <h1 style={{
                    fontWeight: '700', /* font-medium */
                    color: '#0094E0',
                    fontSize: textSizes['lg'].fontSize,
                    textDecoration: 'underline'
                  }}>View All 8 Locations</h1>
                </a>
              </div>
            </div>

            <p style={{ color: '#374151', marginBottom: '8px' }}>We look forward to providing you with exceptional care.</p> {/* text-gray-700 mb-2 */}

            <p style={{ color: '#374151', marginBottom: '4px' }}>Warm regards,</p> {/* text-gray-700 mb-1 */}

            <p style={{ color: '#374151', fontWeight: '500' }}>The Mountain Spine & Orthopedics Team</p> {/* text-gray-700 font-medium */}
          </div>

          {/* Footer */}
          <div style={{
            textAlign: 'center', /* text-center */
            color: '#6b7280', /* text-gray-500 */
            fontSize: textSizes.xs.fontSize, /* text-xs */
            lineHeight: textSizes.xs.lineHeight,
            marginTop: '24px' /* mt-6 */
          }}>
            <p style={{ marginBottom: '8px' }}>© {new Date().getFullYear()} Mountain Spine & Orthopedics. All rights reserved.</p> {/* mb-2, updated year */}

            <div style={{
              marginBottom: '12px' /* mb-3 -- note: space-x-4 handled by individual link margins */
            }}>
              {/* space-x-4: Apply margin to links. For email, better to wrap each in a span or apply directly. */}
              <a href="https://mountainspineorthopedics.com" style={{ color: '#0094E0', textDecoration: 'underline', marginRight: '8px' }}>{/* text-[#0094E0] hover:underline. For half of space-x-4 (16px / 2) */}
                Website
              </a>
              <a href="https://mountainspineorthopedics.com/locations" style={{ color: '#0094E0', textDecoration: 'underline', marginLeft: '8px', marginRight: '8px' }}> {/* for space-x-4 */}
                Locations
              </a>
              <a href="tel:5612239959" style={{ color: '#0094E0', textDecoration: 'underline', marginLeft: '8px' }}> {/* for half of space-x-4 */}
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
