export const metadata = {
  title: "Terms & Conditions - Hazrat Ali Blogs Website",
  description:
    "Read our terms and conditions for using Hazrat Ali Blogs Website",
};
// Page tsx 
export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-5">
      <h1 className="text-4xl font-bold">Terms & Conditions</h1>
      <p className="mt-4 text-muted-foreground">Last updated: April 15, 2024</p>

      <div className="mt-12 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p className="mt-4">
            Welcome to Hazrat Ali Blogs. By accessing and using this website, you
            accept and agree to be bound by the terms and conditions outlined
            here.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">2. Website Usage Terms</h2>
          <ul className="mt-4 list-inside list-disc space-y-2">
            <li>Content is provided for educational purposes only</li>
            <li>Users must be at least 13 years old to access the website</li>
            <li>Users are responsible for maintaining account security</li>
            <li>Prohibited activities will result in account termination</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            3. Content Ownership & Copyright
          </h2>
          <p className="mt-4">
            All content published on Hazrat Ali Blogs is protected by copyright
            law. Users may not reproduce, distribute, or create derivative works
            without explicit permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            4. User Registration & Account Terms
          </h2>
          <p className="mt-4">
            Users must provide accurate information when creating an account.
            Accounts found to contain false information may be terminated
            without notice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            5. Code Snippet Usage Policy
          </h2>
          <p className="mt-4">
            Code snippets provided on Hazrat Ali Blogs are available for
            educational purposes. Users may use these snippets in their projects
            with proper attribution.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            6. Comment Policy & Community Guidelines
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2">
            <li>Be respectful and constructive in discussions</li>
            <li>No spam, harassment, or offensive content</li>
            <li>Stay on topic and contribute meaningfully</li>
            <li>Moderators may remove inappropriate content</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">7. Limitation of Liability</h2>
          <p className="mt-4">
          Hazrat Ali Blogs is not liable for any damages arising from the use or
            inability to use our website or services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">8. Changes to Terms</h2>
          <p className="mt-4">
            We reserve the right to modify these terms at any time. Users will
            be notified of significant changes via email or website
            announcement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">9. Contact Information</h2>
          <p className="mt-4">
            For questions about these terms, please contact us at{" "}
            <a
              href="mailto: hazrataliein@gmail.com"
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
