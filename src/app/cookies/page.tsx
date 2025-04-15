export default function CookiePolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-serif text-4xl font-bold text-primary mb-8">
        Cookie Policy
      </h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-foreground/80 mb-8">
          Last updated: March 20, 2024
        </p>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            1. What Are Cookies?
          </h2>
          <p className="text-foreground/80">
            Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide useful information to website owners.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            2. How We Use Cookies
          </h2>
          <p className="text-foreground/80 mb-4">
            We use cookies for the following purposes:
          </p>
          <div className="bg-secondary rounded-lg p-6 space-y-4">
            <div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                Essential Cookies
              </h3>
              <p className="text-foreground/80">
                These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                Performance Cookies
              </h3>
              <p className="text-foreground/80">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                Functionality Cookies
              </h3>
              <p className="text-foreground/80">
                These cookies allow the website to remember choices you make and provide enhanced features.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                Marketing Cookies
              </h3>
              <p className="text-foreground/80">
                These cookies track your visit across our website and help us deliver relevant advertisements.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            3. Types of Cookies We Use
          </h2>
          <div className="space-y-4">
            <div className="border-b border-background pb-4">
              <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                Session Cookies
              </h3>
              <p className="text-foreground/80">
                These temporary cookies are erased when you close your browser. They enable our website to remember your actions during the browsing session.
              </p>
            </div>
            <div className="border-b border-background pb-4">
              <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                Persistent Cookies
              </h3>
              <p className="text-foreground/80">
                These cookies remain on your device until they expire or you delete them. They help us remember your preferences for future visits.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                Third-Party Cookies
              </h3>
              <p className="text-foreground/80">
                These cookies are placed by third-party services that appear on our pages, such as analytics tools and advertising networks.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            4. Managing Cookies
          </h2>
          <p className="text-foreground/80 mb-4">
            You can control and manage cookies in various ways:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground/80">
            <li>
              Browser settings: You can modify your browser settings to block or delete cookies
            </li>
            <li>
              Our cookie banner: Use our cookie consent banner to manage your preferences
            </li>
            <li>
              Third-party tools: Various tools are available to help manage cookies
            </li>
          </ul>
          <p className="text-foreground/80">
            Please note that blocking some types of cookies may impact your experience on our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            5. Updates to This Policy
          </h2>
          <p className="text-foreground/80">
            We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            6. Contact Us
          </h2>
          <p className="text-foreground/80">
            If you have any questions about our Cookie Policy, please contact us at:{" "}
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