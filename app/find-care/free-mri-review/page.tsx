export const metadata = {
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
  ],
  robots: {
    index: true,
    follow: true
  }
};

import FreeMRIReviewClient from './FreeMRIReviewClient'

export default function FreeMRIReview() {
  return (
    <>
      <FreeMRIReviewClient />
      <section className="mt-8 mb-8 w-full flex justify-center">
        <p className="text-sm text-gray-600 max-w-2xl text-center">
          Learn more about our{' '}
          <a href="/treatments/non-surgical-treatments-for-pain-management" className="text-blue-600 underline">non-surgical pain management treatments</a>{' '}or explore our full list of{' '}
          <a href="/locations" className="text-blue-600 underline">clinic locations across Florida</a>.
        </p>
      </section>
    </>
  );
}


