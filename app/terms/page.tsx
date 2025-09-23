"use client";

export default function TermsOfServicePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 text-gray-800">
      <h1 className="text-3xl font-semibold mb-8">Terms of Service</h1>

      <p className="mb-6">Effective Date: September 22, 2025</p>

      <h2 className="text-xl font-semibold mt-10 mb-4">1. Acceptance of Terms</h2>
      <p className="mb-6">
        By accessing or using the NaxoAI website and services, you agree to be
        bound by these Terms of Service and our Privacy Policy. If you do not
        agree, do not use our services.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4">2. Services Provided</h2>
      <p className="mb-6">
        NaxoAI provides AI consulting services for real estate agents and related
        professionals. These services may include consultations, recommendations,
        and setup support for AI tools. We reserve the right to modify or
        discontinue any part of our services at any time without prior notice.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4">3. Eligibility</h2>
      <p className="mb-6">
        You must be at least 18 years old to use our services. By using NaxoAI,
        you represent and warrant that you meet this requirement.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4">4. User Responsibilities</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Provide accurate and complete information.</li>
        <li>Use our services only for lawful purposes.</li>
        <li>Not misuse or attempt to disrupt our website or tools.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-4">5. Fees and Payment</h2>
      <p className="mb-6">
        Fees for consultations and services are listed on our website. Payments
        are due at the time of booking unless otherwise agreed. All fees are
        non-refundable except as required by law.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4">6. No Legal or Financial Advice</h2>
      <p className="mb-6">
        NaxoAI provides consulting and recommendations on AI tools and workflows.
        We do not provide legal, financial, or compliance advice. You are
        responsible for ensuring that your business practices comply with
        applicable laws, including Fair Housing and data privacy regulations.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4">7. Intellectual Property</h2>
      <p className="mb-6">
        All content, materials, and trademarks on the NaxoAI website are owned by
        us or our licensors. You may not copy, reproduce, or distribute our
        content without prior written consent.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4">8. Limitation of Liability</h2>
      <p className="mb-6">
        To the maximum extent permitted by law, NaxoAI is not liable for any
        indirect, incidental, or consequential damages arising from the use of
        our services. Our total liability is limited to the amount you paid us in
        the 30 days prior to the claim.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4">9. Termination</h2>
      <p className="mb-6">
        We may suspend or terminate your access to our services if you violate
        these Terms.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4">10. Governing Law</h2>
      <p className="mb-6">
        These Terms shall be governed by and construed in accordance with the
        laws of the State of North Carolina, without regard to its conflict of
        law principles.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4">11. Changes to These Terms</h2>
      <p className="mb-6">
        We may update these Terms from time to time. The latest version will
        always be posted on this page with an updated &quot;Effective Date.&quot;
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4">12. Contact Us</h2>
      <p>
        If you have questions about these Terms, contact us at:{" "}
        <a
          href="mailto:contact@naxoai.com"
          className="text-blue-600 underline"
        >
          contact@naxoai.com
        </a>
        .
      </p>
    </main>
  );
}
