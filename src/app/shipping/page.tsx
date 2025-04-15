export default function ShippingPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-serif text-4xl font-bold text-primary mb-8">
        Shipping Policy
      </h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-foreground/80 mb-8">
          Last updated: March 20, 2024
        </p>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            1. Shipping Methods
          </h2>
          <p className="text-foreground/80 mb-4">
            We offer the following shipping methods:
          </p>
          <div className="bg-secondary rounded-lg p-6 space-y-4">
            <div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                Standard Shipping
              </h3>
              <ul className="list-disc pl-6 text-foreground/80">
                <li>Italy: 2-3 business days (€5-8)</li>
                <li>EU Countries: 3-5 business days (€8-15)</li>
                <li>International: 7-14 business days (€15-30)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                Express Shipping
              </h3>
              <ul className="list-disc pl-6 text-foreground/80">
                <li>Italy: 1-2 business days (€10-15)</li>
                <li>EU Countries: 2-3 business days (€15-25)</li>
                <li>International: 3-5 business days (€30-50)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            2. Order Processing
          </h2>
          <p className="text-foreground/80 mb-4">
            Orders are processed within 1-2 business days after payment confirmation. During peak seasons or promotional periods, processing times may be extended by 1-2 additional business days.
          </p>
          <p className="text-foreground/80">
            You will receive a confirmation email with tracking information once your order has been shipped.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            3. Free Shipping
          </h2>
          <p className="text-foreground/80 mb-4">
            We offer free standard shipping on orders over:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground/80">
            <li>Italy: €50</li>
            <li>EU Countries: €100</li>
            <li>International: €150</li>
          </ul>
          <p className="text-foreground/80">
            Free shipping promotions may be available during special events or seasonal sales.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            4. Tracking Your Order
          </h2>
          <p className="text-foreground/80">
            Once your order is shipped, you will receive a tracking number via email. You can track your order:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground/80">
            <li>Through the tracking link in your shipping confirmation email</li>
            <li>By logging into your account on our website</li>
            <li>By contacting our customer service team</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            5. International Shipping
          </h2>
          <p className="text-foreground/80 mb-4">
            For international orders:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground/80">
            <li>Import duties and taxes are not included in the shipping cost</li>
            <li>The recipient is responsible for any customs fees</li>
            <li>Delivery times may vary due to customs processing</li>
            <li>Not all products may be available for international shipping</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            6. Shipping Restrictions
          </h2>
          <p className="text-foreground/80">
            Some products may have shipping restrictions due to their nature or local regulations. We reserve the right to cancel orders that cannot be shipped to certain locations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            7. Contact Us
          </h2>
          <p className="text-foreground/80">
            For any shipping-related questions, please contact our customer service team at:{" "}
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