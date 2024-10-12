'use client';

import { ImageCard } from "@/components/image/image";
function Founders() {
  return (
    <main>
      <section className="founders-section">
        <div className="founders-container">
          <p className="founders-headline">
            Meet the artisans behind our masterpieces!
          </p>
          <p className="founders-headline">Mike and Mandy</p>
          <ImageCard
            src="/images/founder-mike-and-mandy.png"
            alt="description"
            width="340"
            height="340"
            className="founder-image"
          />
        </div>
        <div className="founder-card">
          <h2>Our craftmanship</h2>
          <p>
            Mike and Mandy studied and honed their craft under the fireplace
            sensei Vik Von Blaze. Nothing gets delivered to a coustomare without
            their sign off{" "}
          </p>
          <ImageCard
            src="/images/founders-1.png"
            alt="description"
            width="340"
            height="340"
            className="founder-image"
          />
        </div>
        <div className="founder-card">
          <h2>Our experience</h2>
          <p>
            Numbers don't lie - we'we been around for 20+ years and have a long
            list of happy cutomers who gladly reccomend us.
          </p>
          <ImageCard
            src="/images/founders-2.png"
            alt="description"
            width="340"
            height="340"
            className="founder-image"
          />
        </div>
        <div className="founder-card">
          <h2>Our guarantee</h2>
          <p>
            If you're not 100% satisfied we will fully refund yout purchase.
            Also, we offer free repairs for the first 20 years of ownership.
            Find that somewhere else.
          </p>
          <ImageCard
            src="/images/founders-3.png"
            alt="description"
            width="340"
            height="340"
            className="founder-image"
          />
        </div>
      </section>

      <section className="our-expertice"></section>
    </main>
  );
}

export default Founders;
