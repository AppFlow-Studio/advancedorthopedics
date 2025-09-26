import Image from "next/image"
import { MapPin, Phone, Mail, Calendar, User, Building, Scale, FileText } from "lucide-react"

interface LawyerEmailProps {
    firmName: string
    attorneyName: string
    email: string
    phone: string
    barNumber?: string
    practiceAreas: string
    caseType: string
    clientName: string
    clientEmail: string
    clientPhone: string
    accidentDate: string
    injuryDescription: string
    urgency: string
    additionalInfo?: string
}

const textSizes = {
    xs: { fontSize: '12px', lineHeight: '16px' },
    sm: { fontSize: '14px', lineHeight: '20px' },
    base: { fontSize: '16px', lineHeight: '24px' },
    lg: { fontSize: '18px', lineHeight: '28px' },
    xl: { fontSize: '20px', lineHeight: '28px' },
    '2xl': { fontSize: '24px', lineHeight: '32px' },
}

export const LawyerEmailTemplate: React.FC<Readonly<LawyerEmailProps>> = ({
    firmName,
    attorneyName,
    email,
    phone,
    barNumber,
    practiceAreas,
    caseType,
    clientName,
    clientEmail,
    clientPhone,
    accidentDate,
    injuryDescription,
    urgency,
    additionalInfo
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
                        <h1 style={{ fontSize: '24px', color: 'white', marginTop: '10px' }}>Attorney Coordination Request</h1>
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
                        }}>New Attorney Coordination Request</h1>

                        {/* Attorney Information */}
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
                                Attorney Information
                            </h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                <div>
                                    <p style={{ color: '#374151', marginBottom: '4px' }}>
                                        <strong>Firm:</strong> {firmName}
                                    </p>
                                    <p style={{ color: '#374151', marginBottom: '4px' }}>
                                        <strong>Attorney:</strong> {attorneyName}
                                    </p>
                                    {barNumber && (
                                        <p style={{ color: '#374151', marginBottom: '4px' }}>
                                            <strong>Bar Number:</strong> {barNumber}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <p style={{ color: '#374151', marginBottom: '4px' }}>
                                        <strong>Email:</strong> {email}
                                    </p>
                                    <p style={{ color: '#374151', marginBottom: '4px' }}>
                                        <strong>Phone:</strong> {phone}
                                    </p>
                                    <p style={{ color: '#374151', marginBottom: '4px' }}>
                                        <strong>Practice Areas:</strong> {practiceAreas}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Client Information */}
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
                                <User style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                                Client Information
                            </h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                <div>
                                    <p style={{ color: '#374151', marginBottom: '4px' }}>
                                        <strong>Client Name:</strong> {clientName}
                                    </p>
                                    <p style={{ color: '#374151', marginBottom: '4px' }}>
                                        <strong>Client Email:</strong> {clientEmail}
                                    </p>
                                </div>
                                <div>
                                    <p style={{ color: '#374151', marginBottom: '4px' }}>
                                        <strong>Client Phone:</strong> {clientPhone}
                                    </p>
                                    <p style={{ color: '#374151', marginBottom: '4px' }}>
                                        <strong>Accident Date:</strong> {accidentDate}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Case Details */}
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
                                marginBottom: '12px',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <FileText style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                                Case Details
                            </h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                <div>
                                    <p style={{ color: '#374151', marginBottom: '4px' }}>
                                        <strong>Case Type:</strong> {caseType}
                                    </p>
                                    <p style={{ color: '#374151', marginBottom: '4px' }}>
                                        <strong>Urgency:</strong> {urgency}
                                    </p>
                                </div>
                                {/* <div>
                                    <p style={{ color: '#374151', marginBottom: '4px' }}>
                                        <strong>Preferred Location:</strong> {preferredLocation}
                                    </p>
                                </div> */}
                            </div>
                            <div style={{ marginTop: '12px' }}>
                                <p style={{ color: '#374151', marginBottom: '8px' }}>
                                    <strong>Injury Description:</strong>
                                </p>
                                <p style={{
                                    color: '#374151',
                                    backgroundColor: '#ffffff',
                                    padding: '12px',
                                    borderRadius: '4px',
                                    border: '1px solid #e5e7eb'
                                }}>
                                    {injuryDescription}
                                </p>
                            </div>
                            {additionalInfo && (
                                <div style={{ marginTop: '12px' }}>
                                    <p style={{ color: '#374151', marginBottom: '8px' }}>
                                        <strong>Additional Information:</strong>
                                    </p>
                                    <p style={{
                                        color: '#374151',
                                        backgroundColor: '#ffffff',
                                        padding: '12px',
                                        borderRadius: '4px',
                                        border: '1px solid #e5e7eb'
                                    }}>
                                        {additionalInfo}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Action Required */}
                        <div style={{
                            backgroundColor: '#dcfce7',
                            borderLeft: '4px solid #16a34a',
                            padding: '16px',
                            borderRadius: '4px',
                            marginBottom: '24px'
                        }}>
                            <h3 style={{
                                fontWeight: '700',
                                color: '#166534',
                                marginBottom: '12px'
                            }}>Action Required:</h3>
                            <ul style={{ color: '#374151', paddingLeft: '20px' }}>
                                <li style={{ marginBottom: '8px' }}>Contact attorney within 2 hours during business hours</li>
                                <li style={{ marginBottom: '8px' }}>Schedule client evaluation at preferred location</li>
                                <li style={{ marginBottom: '8px' }}>Prepare detailed medical documentation for legal case</li>
                                <li style={{ marginBottom: '8px' }}>Coordinate with attorney on treatment timeline and records</li>
                            </ul>
                        </div>

                        <p style={{ color: '#374151', marginBottom: '8px' }}>
                            <strong>Priority:</strong> {urgency === 'urgent' ? 'HIGH - Same Day Response Required' : urgency === 'high' ? 'HIGH - This Week' : 'Standard'}
                        </p>

                        <p style={{ color: '#374151', marginBottom: '8px' }}>
                            <strong>Next Steps:</strong> Our team will contact the attorney within 2 hours to coordinate the client's evaluation and documentation needs.
                        </p>
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
