import { useNavigate } from "react-router-dom";

export default function Terms() {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Terms & Policy
      </h1>

      <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
        <p>
          Welcome to our platform. By accessing or using this website, quiz system, playlist generation service, or any related features, you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully before using the service.

          <br /><br />

          1. Acceptance of Terms

          By creating an account, submitting a quiz, making a payment, or using any feature of this platform, you confirm that you have read, understood, and agreed to these Terms & Conditions.
          If you do not agree, you must discontinue use of the service immediately.

          <br /><br />

          2. Description of Service

          Our platform provides:

          * A music preference quiz
          * AI-assisted playlist recommendations
          * Spotify-based playlist previews or links
          * Optional paid upgrades for enhanced features

          The service is intended for **personal, non-commercial use only**.

          <br /><br />

          3. User Accounts

          * You are responsible for maintaining the confidentiality of your login credentials.
          * You agree to provide accurate and complete information during signup or guest email submission.
          * You are fully responsible for all activities conducted under your account.

          We reserve the right to suspend or terminate accounts that violate these terms.

          <br /><br />

          4. Payments & Subscriptions

          * Certain features may require payment through third-party providers (e.g., Stripe).
          * All payments are processed securely by the payment provider. We do not store card details.
          * Payments are **non-refundable**, unless explicitly stated otherwise.
          * If a payment is cancelled or fails, access to premium features will not be granted.

          <br /><br />

          5. Spotify Integration Disclaimer

          * This platform is **not affiliated with, endorsed by, or sponsored by Spotify**.
          * Spotify logos, playlists, and track previews belong to their respective owners.
          * Playlist results are recommendations only and may vary based on availability or region.

          <br /><br />

          6. Intellectual Property

          All content on this platform—including UI design, quiz structure, branding, text, and generated outputs—is protected by intellectual property laws.

          You may not:

          * Copy, redistribute, or resell the service
          * Reverse-engineer the quiz logic or AI system
          * Use the platform for commercial redistribution without written permission

          <br /><br />

          7. AI-Generated Content Disclaimer

          Playlist titles, descriptions, and recommendations may be generated using AI systems.

          * AI outputs are **informational and entertainment-based only**
          * We do not guarantee accuracy, completeness, or suitability for specific events
          * Users acknowledge that AI-generated results may vary

          <br /><br />

          8. Limitation of Liability

          We are not liable for:

          * Service interruptions or technical issues
          * Playlist accuracy or music availability
          * Third-party service failures (Spotify, payment providers)
          * Any indirect or consequential damages

          Use of the service is at your own risk.

          <br /><br />

          9. Termination

          We reserve the right to:

          * Suspend or terminate access without prior notice
          * Remove content or accounts that violate these terms
          * Modify or discontinue any part of the service at any time

          <br /><br />

          10. Changes to Terms

          We may update these Terms & Conditions at any time. Continued use of the platform after updates constitutes acceptance of the revised terms.

          <br /><br />

          11. Contact Information

          For questions regarding these Terms,
          <br /> Please contact us at:
          📧(test.info@gmail.com)

          </p>
          ----------------------------------------------------------------------<br /><br /><br />
          <p>
            <h1 className="text-xl font-bold mb-6">🔐 Privacy Policy</h1>

          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.

          <br /><br />

          1. Information We Collect

          We may collect the following data:

          * Name and email address
          * Quiz responses and music preferences
          * Payment status (not card details)
          * Basic technical data (browser, device, IP)

          <br /><br />

          2. How We Use Your Information

          We use collected data to:

          * Generate personalized playlist recommendations
          * Improve quiz accuracy and user experience
          * Provide customer support
          * Process authentication and payments
          * Send service-related notifications (if applicable)

          <br /><br />

          3. Data Sharing

          We do **not** sell or rent your personal data.

          We may share limited data with:

          * Payment processors (for transaction handling)
          * Spotify or third-party APIs (for playlist functionality)
          * Legal authorities, if required by law

          <br /><br />

          4. Cookies & Sessions

          We use cookies and session storage to:

          * Maintain login sessions
          * Remember user preferences
          * Improve site performance

          You may disable cookies, but some features may not function properly.

          <br /><br />

          5. Data Security

          We implement industry-standard security measures to protect your data.
          However, no system is 100% secure, and we cannot guarantee absolute security.

          <br /><br />

          6. User Rights

          You have the right to:

          * Request access to your personal data
          * Request correction or deletion of your data
          * Withdraw consent where applicable

          Requests can be sent to our support email.

          <br /><br />

          7. Third-Party Links

          Our platform may contain links to third-party services. We are not responsible for their privacy practices or content.

          <br /><br />

          8. Children’s Privacy

          This platform is not intended for users under the age of 13. We do not knowingly collect data from minors.

          <br /><br />

          9. Updates to Privacy Policy

          We may update this Privacy Policy periodically. Changes will be effective upon posting.

          <br /><br />

          10. Contact Us: <br />

          If you have questions about this Privacy Policy,<br />
          contact:
          📧(test.info@gmail.com)
        </p>
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 rounded-full bg-blue-600 text-white cursor-pointer hover:bg-blue-700 transition"
        >
          Back
        </button>
      </div>
    </div>
  );
}
