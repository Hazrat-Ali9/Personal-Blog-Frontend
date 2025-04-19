export const metadata = {
  title: "Privacy Policy - Hazrat Ali Problem Solving Website",
  description:
    "Learn about how we collect and protect your data at Hazrat Ali Problem Solving Website.",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-5">
      <h1 className="text-4xl font-bold">Privacy Policy</h1>
      <p className="mt-4 text-muted-foreground">
        Effective Date: January 1, 2025
      </p>

      <div className="mt-12 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold">1. Information Collection</h2>
          <p className="mt-4">
            We collect information that you provide directly to us, including:
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2">
            <li>Name and email address when subscribing to our newsletter</li>
            <li>Profile information when creating an account</li>
            <li>Comments and feedback you provide</li>
            <li>Information shared through contact forms</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            2. Technical Data Collection
          </h2>
          <p className="mt-4">
            We automatically collect certain information when you visit our
            website:
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2">
            <li>IP address and browser information</li>
            <li>Device information and operating system</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referral sources and exit pages</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">3. Newsletter Subscription</h2>
          <p className="mt-4">
            When you subscribe to our newsletter, we collect your email address
            to send you:
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2">
            <li>Weekly technical articles and tutorials</li>
            <li>Updates about new features and content</li>
            <li>Occasional promotional content</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">4. Data Usage & Processing</h2>
          <p className="mt-4">We use your information to:</p>
          <ul className="mt-4 list-inside list-disc space-y-2">
            <li>Provide and improve our services</li>
            <li>Personalize your experience</li>
            <li>Communicate with you about updates</li>
            <li>Analyze website performance</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">5. GDPR Compliance</h2>
          <p className="mt-4">
            For users in the European Union, we comply with GDPR requirements:
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2">
            <li>Right to access your personal data</li>
            <li>Right to rectification of incorrect data</li>
            <li>Right to erasure of your data</li>
            <li>Right to data portability</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">6. CCPA Rights</h2>
          <p className="mt-4">
            California residents have additional rights under CCPA:
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2">
            <li>Right to know what personal information is collected</li>
            <li>Right to delete personal information</li>
            <li>Right to opt-out of data sales</li>
            <li>Right to non-discrimination</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">7. Data Security</h2>
          <p className="mt-4">We implement appropriate security measures:</p>
          <ul className="mt-4 list-inside list-disc space-y-2">
            <li>SSL encryption for data transmission</li>
            <li>Regular security audits</li>
            <li>Limited access to personal data</li>
            <li>Secure data storage practices</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">8. Third-party Services</h2>
          <p className="mt-4">We use trusted third-party services for:</p>
          <ul className="mt-4 list-inside list-disc space-y-2">
            <li>Analytics (Google Analytics)</li>
            <li>Content delivery (Cloudflare)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            9. Contact for Privacy Concerns
          </h2>
          <p className="mt-4">
            For privacy-related questions or concerns, please contact our Data
            Protection Officer at{" "}
            <a
              href="mailto:hazrataliein@gmail.com"
              className="text-primary hover:underline"
            >
              hazrataliein@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
// Page tsx 