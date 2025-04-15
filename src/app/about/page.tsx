import React from "react";
import { FlagIcon, Scissors, Shirt, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            La Nostra Storia
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            {`L&apos;eleganza italiana incontra l&apos;artigianalità moderna`}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                Bella Italia
              </h2>
              <div className="space-y-4 text-foreground">
                <p>
                  {`Fondata nel 2010 a Milano, Bella Italia nasce dalla passione per la moda italiana 
                  e il desiderio di portare l&apos;autentico stile italiano in tutto il mondo.`}
                </p>
                <p>
                  Ogni capo della nostra collezione è realizzato con tessuti
                  pregiati e cura artigianale, mantenendo viva la tradizione
                  sartoriale italiana mentre abbracciamo design contemporanei.
                </p>
                <p>
                  {`Oggi spediamo i nostri capi in oltre 50 paesi, portando un pezzo d&apos;Italia agli 
                  amanti della moda in tutto il mondo.`}
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/italian-tailor.jpg"
                alt="Sarto italiano al lavoro"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Italian Heritage */}
        <section className="mb-20 bg-secondary rounded-xl p-8">
          <div className="flex items-center mb-6">
            <FlagIcon className="text-primary mr-3" size={28} />
            <h2 className="font-serif text-2xl font-bold text-primary">
              Eredità Italiana
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Scissors className="text-accent-terracotta" size={24} />,
                title: "Sartoria Tradizionale",
                description:
                  "Ogni capo riflette secoli di tradizione sartoriale italiana",
              },
              {
                icon: <Shirt className="text-accent-terracotta" size={24} />,
                title: "Tessuti Pregiati",
                description:
                  "Utilizziamo solo i migliori tessuti italiani come lana cashmere e lino toscano",
              },
              {
                icon: <Heart className="text-accent-terracotta" size={24} />,
                title: "Passione Artigiana",
                description:
                  "Realizzato con amore da artigiani esperti nel cuore dell'Italia",
              },
            ].map((item, index) => (
              <div key={index} className="bg-background p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  {item.icon}
                  <h3 className="font-medium text-lg ml-3">{item.title}</h3>
                </div>
                <p className="text-foreground/90">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20">
          <h2 className="font-serif text-3xl font-bold text-primary mb-12 text-center">
            I Nostri Valori
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Qualità",
                description:
                  "Non scendiamo mai a compromessi sulla qualità dei nostri materiali e lavorazioni",
                color: "text-primary",
              },
              {
                title: "Sostenibilità",
                description:
                  "Produciamo in modo etico e sostenibile, rispettando l'ambiente",
                color: "text-accent-terracotta",
              },
              {
                title: "Tradizione",
                description:
                  "Manteniamo vivi i metodi di produzione tradizionali italiani",
                color: "text-primary",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h3
                  className={`font-serif text-2xl font-bold ${item.color} mb-4`}
                >
                  {item.title}
                </h3>
                <p className="text-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-accent-terracotta text-white rounded-xl p-8 text-center">
          <h2 className="font-serif text-2xl font-bold mb-4">
            Pronto a scoprire la vera moda italiana?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            {`Esplora la nostra collezione e vesti l&apos;eleganza senza tempo dello stile italiano.`}
          </p>
          <Link href="/products">
            <button className="bg-primary hover:bg-primary/90 text-white font-medium rounded-md px-8 py-3 transition-colors">
              Scopri la Collezione
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
