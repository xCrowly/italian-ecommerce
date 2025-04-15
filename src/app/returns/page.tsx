export default function ReturnsAndRefundsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-serif text-4xl font-bold text-primary mb-8">
        Returns & Refunds
      </h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-foreground/80 mb-8">
          Last updated: March 20, 2024
        </p>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            1. Return Policy Overview
          </h2>
          <p className="text-foreground/80">
            We want you to be completely satisfied with your purchase. If you're not happy with your order, we accept returns within 30 days of delivery for a full refund or exchange.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            2. Return Eligibility
          </h2>
          <p className="text-foreground/80 mb-4">
            To be eligible for a return, your item must be:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground/80">
            <li>Unused and in the same condition that you received it</li>
            <li>In the original packaging</li>
            <li>Accompanied by the original receipt or proof of purchase</li>
            <li>Returned within 30 days of delivery</li>
          </ul>
          <p className="text-foreground/80 mb-4">
            The following items cannot be returned:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground/80">
            <li>Perishable goods</li>
            <li>Custom-made or personalized items</li>
            <li>Intimate or sanitary goods</li>
            <li>Items marked as final sale</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            3. Return Process
          </h2>
          <div className="bg-secondary rounded-lg p-6 space-y-4">
            <h3 className="font-serif text-xl font-semibold text-primary mb-2">
              Steps to Return an Item:
            </h3>
            <ol className="list-decimal pl-6 text-foreground/80 space-y-2">
              <li>
                Contact our customer service team to initiate the return process
              </li>
              <li>
                Fill out the return form included with your order or available online
              </li>
              <li>
                Pack the item securely in its original packaging
              </li>
              <li>
                Attach the provided return shipping label
              </li>
              <li>
                Drop off the package at the specified shipping carrier
              </li>
            </ol>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            4. Refund Process
          </h2>
          <p className="text-foreground/80 mb-4">
            Once we receive your return:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground/80">
            <li>We will inspect the item within 2-3 business days</li>
            <li>You will receive an email confirming your refund</li>
            <li>
              The refund will be processed to your original payment method within
              5-10 business days
            </li>
            <li>
              Shipping costs are non-refundable unless the return is due to our
              error
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            5. Exchanges
          </h2>
          <p className="text-foreground/80 mb-4">
            If you need to exchange an item:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground/80">
            <li>Follow the same return process</li>
            <li>Indicate your preferred replacement item</li>
            <li>
              We will ship the new item once we receive and process your return
            </li>
            <li>
              Additional shipping charges may apply for exchanges
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            6. Damaged or Incorrect Items
          </h2>
          <p className="text-foreground/80 mb-4">
            If you receive a damaged or incorrect item:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground/80">
            <li>Contact us immediately with photos of the damage</li>
            <li>We will send a replacement at no additional cost</li>
            <li>We will cover return shipping for damaged items</li>
            <li>
              Claims must be made within 48 hours of delivery
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            7. Contact Us
          </h2>
          <p className="text-foreground/80">
            If you have any questions about our return policy, please contact us at:{" "}
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