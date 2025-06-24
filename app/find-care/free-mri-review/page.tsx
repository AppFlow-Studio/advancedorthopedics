import FreeMRIReviewClient from './FreeMRIReviewClient'

export const generateMetadata = () => ({
  title: 'Free MRI Review | Mountain Spine & Orthopedics',
  description: 'Get a complimentary MRI review from board-certified orthopedic spine specialists in Florida. Submit your scans securely and receive expert insights today.',
  openGraph: {
    title: 'Free MRI Review | Mountain Spine & Orthopedics',
    description: 'Get a complimentary MRI review from board-certified orthopedic spine specialists in Florida. Submit your scans securely and receive expert insights today.',
    type: 'website',
    url: 'https://mountainspineorthopedics.com/find-care/free-mri-review',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free MRI Review | Mountain Spine & Orthopedics',
    description: 'Get a complimentary MRI review from board-certified orthopedic spine specialists in Florida. Submit your scans securely and receive expert insights today.',
  },
  keywords: [
    'free MRI review',
    'orthopedic MRI',
    'spine specialist Florida',
    'MRI scan review',
    'Mountain Spine & Orthopedics',
    'virtual MRI review',
    'orthopedic care',
    'Florida spine doctor'
  ]
});

export default function Page() {
  return <FreeMRIReviewClient />


export default FreeMRIReview
