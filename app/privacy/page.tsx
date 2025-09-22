"use client";

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 text-gray-800">
      <h1 className="text-3xl font-semibold mb-8">Privacy Policy</h1>

      <p className="mb-6">
        Effective Date: September 22, 2025
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4">1. Introduction</h2>
      <p className="mb-6">
        NaxoAI ("we," "our," or "us") respects your privacy and is committed to
        protecting the personal information you share with us. This Privacy Policy
        explains how we collect, use, and safeguard your information when you use
        our website and services.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4">2. Information We Collect</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>
          <strong>Personal Information:</strong> Name, email address, and details you
          provide when scheduling a consultation or contacting us.
        </li>
        <li>
          <strong>Usage Information:</strong> Data about how you interact with our
          website, including IP address, browser type, device type, and pages
          visited.
        </li>
        <li>
          <strong>Cookies and Tracking:</strong> We may use cookies and analytics to
          improve your browsing experience.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-4">3. How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Provide and improve our AI consulting services.</li>
        <li>Schedule and manage consultations.</li>
        <li>Respond to inquiries and support requests.</li>
        <li>Send updates or marketing communications (if you opt in).</li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-4">4. How We Share Information</h2>
      <p className="mb-6">
        We do not sell your personal information. We may share it with trusted
        service providers (such as Calendly or Google Analytics) and when required
        by law.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4">5. Data Security</h2>
      <p className="mb-6">
        We take reasonable measures to protect your information. However, no method
        of transmission over the internet is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4">6. Your Rights</h2>
      <p className="mb-6">
        Depending on your location, you may have rights under data protection laws
        such as GDPR or CCPA. You may request access, correction, or deletion of
        your data, or opt out of marketing emails by contacting us at{" "}
        <a href="mailto:contact@naxoai.com" className="text-blue-600 underline">
          contact@naxoai.com
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4">7. Children's Privacy</h2>
      <p className="mb-6">
        Our services are not directed to individuals under 18, and we do not
        knowingly collect personal information from children.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4">8. Updates to This Policy</h2>
      <p className="mb-6">
        We may update this Privacy Policy from time to time. Changes will be posted
        on this page with an updated "Effective Date."
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4">9. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, contact us at:{" "}
        <a href="mailto:contact@naxoai.com" className="text-blue-600 underline">
          contact@naxoai.com
        </a>
        .
      </p>
    </main>
  );
}
