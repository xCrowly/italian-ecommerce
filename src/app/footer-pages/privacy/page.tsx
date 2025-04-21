export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-serif text-4xl font-bold text-primary mb-8">
        Privacy Policy
      </h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-foreground/80 mb-8">
          Last updated: March 20, 2024
        </p>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            1. Introduction
          </h2>
          <p className="text-foreground/80">
            Bella Italia (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            2. Information We Collect
          </h2>
          <h3 className="font-serif text-xl font-semibold text-primary mb-2">
            2.1 Personal Information
          </h3>
          <ul className="list-disc pl-6 mb-4 text-foreground/80">
            <li>Name and contact information</li>
            <li>Billing and shipping addresses</li>
            <li>Payment information</li>
            <li>Email address</li>
            <li>Phone number</li>
          </ul>

          <h3 className="font-serif text-xl font-semibold text-primary mb-2">
            2.2 Usage Information
          </h3>
          <ul className="list-disc pl-6 mb-4 text-foreground/80">
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>IP address</li>
            <li>Pages visited and time spent</li>
            <li>Referring website addresses</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            3. How We Use Your Information
          </h2>
          <p className="text-foreground/80 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground/80">
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about your orders and our services</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            4. Information Sharing
          </h2>
          <p className="text-foreground/80">
            We do not sell or rent your personal information to third parties. We may share your information with:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground/80">
            <li>Service providers who assist in our operations</li>
            <li>Payment processors</li>
            <li>Shipping and delivery partners</li>
            <li>Legal authorities when required by law</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            5. Your Rights
          </h2>
          <p className="text-foreground/80 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground/80">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
            <li>Data portability</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            6. Contact Us
          </h2>
          <p className="text-foreground/80">
            If you have any questions about this Privacy Policy, please contact us at:{" "}
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