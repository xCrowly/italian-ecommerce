export default function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-serif text-4xl font-bold text-primary mb-8">
        Terms of Service
      </h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-foreground/80 mb-8">
          Last updated: March 20, 2024
        </p>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            1. Agreement to Terms
          </h2>
          <p className="text-foreground/80">
            By accessing and using Bella Italia&apos;s website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            2. Use of Services
          </h2>
          <p className="text-foreground/80 mb-4">
            You agree to use our services only for lawful purposes and in accordance with these Terms. You must not:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground/80">
            <li>Use our services in any way that violates applicable laws</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Engage in any activity that disrupts our services</li>
            <li>Submit false or misleading information</li>
            <li>Use our services for any fraudulent purpose</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            3. Account Responsibilities
          </h2>
          <p className="text-foreground/80 mb-4">
            If you create an account with us, you are responsible for:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground/80">
            <li>Maintaining the confidentiality of your account credentials</li>
            <li>All activities that occur under your account</li>
            <li>Providing accurate and current information</li>
            <li>Notifying us of any unauthorized use of your account</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            4. Products and Orders
          </h2>
          <p className="text-foreground/80 mb-4">
            4.1 Product Information
          </p>
          <p className="text-foreground/80 mb-4">
            We strive to display accurate product information, including prices and availability. However, we reserve the right to correct any errors and to change or update information at any time without prior notice.
          </p>
          <p className="text-foreground/80 mb-4">
            4.2 Order Acceptance
          </p>
          <p className="text-foreground/80 mb-4">
            We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in product or pricing information, or suspected fraud.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            5. Intellectual Property
          </h2>
          <p className="text-foreground/80">
            All content on our website, including text, graphics, logos, images, and software, is the property of Bella Italia or its content suppliers and is protected by international copyright laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            6. Limitation of Liability
          </h2>
          <p className="text-foreground/80">
            To the maximum extent permitted by law, Bella Italia shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            7. Changes to Terms
          </h2>
          <p className="text-foreground/80">
            We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on our website. Your continued use of our services after such modifications constitutes your acceptance of the new Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            8. Contact Information
          </h2>
          <p className="text-foreground/80">
            For questions about these Terms, please contact us at:{" "}
            <a
              href="mailto:badawy.ca@gmail.com"
              className="text-primary hover:underline"
            >
              badawy.ca@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
} 