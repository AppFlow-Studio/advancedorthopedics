import Image from "next/image"
import { MapPin, Phone, Mail, Calendar, User, Building, Scale, FileText, Clock } from "lucide-react"

interface LawyerConfirmationProps {
    attorneyName: string
    email: string
    firmName: string
    clientName: string
}

const textSizes = {
    xs: { fontSize: '12px', lineHeight: '16px' },
    sm: { fontSize: '14px', lineHeight: '20px' },
    base: { fontSize: '16px', lineHeight: '24px' },
    lg: { fontSize: '18px', lineHeight: '28px' },
    xl: { fontSize: '20px', lineHeight: '28px' },
    '2xl': { fontSize: '24px', lineHeight: '32px' },
}

export const LawyerConfirmationTemplate: React.FC<Readonly<LawyerConfirmationProps>> = ({
    attorneyName,
    email,
    firmName,
    clientName
}) => {
    return (
        <div style={{ width: "100%", fontFamily: 'Arial, sans-serif' }}>
            <div style={{
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                overflow: 'hidden'
            }}>
                <div style={{
                    backgroundColor: '#f9fafb',
                    padding: '16px'
                }}>
                    {/* Header */}
                    <div style={{ backgroundColor: '#0A50EC', color: 'white', padding: '20px', textAlign: 'center' }}>
                        <img src="https://mountainspineortho.b-cdn.net/newlogo4.png" alt="Mountain Spine & Orthopedic Center" style={{ width: '100px' }} />
                        <h1 style={{ fontSize: '24px', color: 'white', marginTop: '10px' }}>Attorney Coordination Confirmed</h1>
                    </div>

                    {/* Main Content */}
                    <div style={{
                        backgroundColor: '#ffffff',
                        padding: '24px',
                        borderRadius: '8px',
                        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                    }}>
                        <h1 style={{
                            fontSize: textSizes['2xl'].fontSize,
                            lineHeight: textSizes['2xl'].lineHeight,
                            fontWeight: '700',
                            color: '#0A50EC',
                            marginBottom: '16px'
                        }}>Thank You for Your Coordination Request</h1>

                        <p style={{ color: '#374151', marginBottom: '16px' }}>Dear {attorneyName},</p>

                        <p style={{ color: '#374151', marginBottom: '16px' }}>
                            Thank you for submitting your attorney coordination request for <strong>{clientName}</strong> from <strong>{firmName}</strong>.
                            We appreciate you choosing Mountain Spine & Orthopedics for your client's orthopedic and spine care needs.
                        </p>

                        {/* Confirmation Details */}
                        <div style={{
                            backgroundColor: '#f0f9ff',
                            borderLeft: '4px solid #3b82f6',
                            padding: '16px',
                            borderRadius: '4px',
                            marginBottom: '24px'
                        }}>
                            <h3 style={{
                                fontWeight: '700',
                                color: '#1e40af',
                                marginBottom: '12px',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <Clock style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                                What Happens Next:
                            </h3>
                            <ul style={{ color: '#374151', paddingLeft: '20px' }}>
                                <li style={{ marginBottom: '8px' }}>Our team is reviewing your coordination request</li>
                                <li style={{ marginBottom: '8px' }}>A staff member will contact you within 2 hours during business hours</li>
                                <li style={{ marginBottom: '8px' }}>We'll coordinate your client's evaluation and documentation needs</li>
                                <li style={{ marginBottom: '8px' }}>We'll provide detailed medical records and reports for your case</li>
                                <li style={{ marginBottom: '8px' }}>We'll maintain clear documentation of treatment necessity</li>
                            </ul>
                        </div>

                        {/* Attorney Benefits */}
                        <div style={{
                            backgroundColor: '#f9fafb',
                            borderLeft: '4px solid #0A50EC',
                            padding: '16px',
                            borderRadius: '4px',
                            marginBottom: '24px'
                        }}>
                            <h3 style={{
                                fontWeight: '700',
                                color: '#0A50EC',
                                marginBottom: '12px',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <Scale style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                                Attorney Benefits:
                            </h3>
                            <ul style={{ color: '#374151', paddingLeft: '20px' }}>
                                <li style={{ marginBottom: '8px' }}>Prompt scheduling coordination for your clients</li>
                                <li style={{ marginBottom: '8px' }}>Detailed medical records and reports</li>
                                <li style={{ marginBottom: '8px' }}>Independent medical examinations when requested</li>
                                <li style={{ marginBottom: '8px' }}>Clear documentation of treatment necessity</li>
                                <li style={{ marginBottom: '8px' }}>HIPAA-compliant communication and record sharing</li>
                                <li style={{ marginBottom: '8px' }}>Expert testimony support when needed</li>
                            </ul>
                        </div>

                        {/* Important Note */}
                        <div style={{
                            backgroundColor: '#fef3c7',
                            borderLeft: '4px solid #f59e0b',
                            padding: '16px',
                            borderRadius: '4px',
                            marginBottom: '24px'
                        }}>
                            <h3 style={{
                                fontWeight: '700',
                                color: '#92400e',
                                marginBottom: '8px'
                            }}>Important:</h3>
                            <p style={{ color: '#374151', marginBottom: '8px' }}>
                                Our medical judgment remains independent. We treat based on clinical need, not legal strategy.
                                We provide objective medical evaluations and documentation to support your case.
                            </p>
                        </div>

                        <p style={{ color: '#374151', marginBottom: '24px' }}>
                            If you need immediate assistance or have urgent coordination needs, please call our main office at{" "}
                            <span style={{ color: '#0A50EC', fontWeight: '500' }}>
                                <a href="tel:5612239959">(561) 223-9959</a>
                            </span>.
                        </p>

                        <hr style={{ borderColor: '#e5e7eb', marginTop: '24px', marginBottom: '24px' }} />

                        {/* Locations Section */}
                        <div style={{ marginBottom: '24px' }}>
                            <h3 style={{
                                fontSize: '20px',
                                fontWeight: '700',
                                color: '#0A50EC',
                                marginBottom: '12px',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <MapPin style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                                Our Locations
                            </h3>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
                                {[
                                    { name: 'Altamonte Springs', address: '123 Main St, Altamonte Springs, FL 32701' },
                                    { name: 'Hollywood', address: '456 Oak Ave, Hollywood, FL 33020' },
                                    { name: 'Fort Pierce', address: '789 Pine St, Fort Pierce, FL 34950' },
                                    { name: 'Davenport', address: '321 Elm St, Davenport, FL 33837' },
                                    { name: 'Orlando', address: '654 Maple Dr, Orlando, FL 32801' }
                                ].map((location, index) => (
                                    <div key={index} style={{
                                        backgroundColor: '#f9fafb',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        border: '1px solid #e5e7eb'
                                    }}>
                                        <h4 style={{
                                            fontWeight: '700',
                                            color: '#1f2937',
                                            fontSize: '16px',
                                            marginBottom: '8px'
                                        }}>{location.name}</h4>
                                        <p style={{ color: '#374151', fontSize: '14px', marginBottom: '4px' }}>
                                            {location.address}
                                        </p>
                                        <p style={{ color: '#374151', fontSize: '14px', marginBottom: '4px' }}>
                                            <strong>Phone:</strong> (561) 223-9959
                                        </p>
                                        <p style={{ color: '#374151', fontSize: '14px' }}>
                                            <strong>Hours:</strong> Mon-Fri: 8am-5pm
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p style={{ color: '#374151', marginBottom: '8px' }}>
                            We look forward to working with you and providing exceptional care for your client.
                        </p>

                        <p style={{ color: '#374151', marginBottom: '4px' }}>Best regards,</p>
                        <p style={{ color: '#374151', fontWeight: '500' }}>The Mountain Spine & Orthopedics Team</p>
                    </div>

                    {/* Footer */}
                    <div style={{
                        textAlign: 'center',
                        color: '#6b7280',
                        fontSize: textSizes.xs.fontSize,
                        lineHeight: textSizes.xs.lineHeight,
                        marginTop: '24px'
                    }}>
                        <p style={{ marginBottom: '8px' }}>© {new Date().getFullYear()} Mountain Spine & Orthopedics. All rights reserved.</p>
                        <div style={{ marginBottom: '12px' }}>
                            <a href="https://mountainspineorthopedics.com" style={{ color: '#0A50EC', textDecoration: 'underline', marginRight: '8px' }}>
                                Website
                            </a>
                            <a href="https://mountainspineorthopedics.com/locations" style={{ color: '#0A50EC', textDecoration: 'underline', marginLeft: '8px', marginRight: '8px' }}>
                                Locations
                            </a>
                            <a href="tel:5612239959" style={{ color: '#0A50EC', textDecoration: 'underline', marginLeft: '8px' }}>
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
