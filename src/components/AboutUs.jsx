import React from "react";
import { building7, interior2, second } from "../assets";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="relative mt-20">
      <img src={second} className="w-full h-auto" alt="Background" />

      <div className="relative">
        <div className="bg-white p-4 md:p-8">
          <h1 className="text-4xl  mb-4">Who we are</h1>
          <p className="text-base md:text-lg md:text-left lg:text-justify ml-2">
            First International Contracting Company is a contractor that values
            relationships. We partner closely with our clients from start to
            finish, ensuring that their ideas become reality. Our vision is to
            change the industry by offering unique products and services that
            make life better and exceed our clients&apos; expectations.
          </p>

          <p className="text-base md:text-lg md:text-left lg:text-justify ml-2 mt-3">
            Our main goal is to be a leader among engineering and construction
            companies in Egypt. We&apos;re working hard to come up with new
            ideas and solutions that will shape the future of the industry.
            We&apos;re really focused on doing great work, setting a high
            standard for other companies in our field, and pushing for progress
            and new ways of doing things.
          </p>

          <p className="text-base md:text-lg md:text-left lg:text-justify ml-2 mt-3">
            With a decade of dedicated experience in the contracting domain,
            First International Contracting Company has meticulously crafted an
            unwavering reputation. This reputation resonates not only within
            Egypt, where we have established deep local roots, but also extends
            internationally through our presence in Saudi Arabia. Our extensive
            portfolio showcases the successful completion of over 50 diverse
            projects, encompassing various domains including residential,
            commercial, and more.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
