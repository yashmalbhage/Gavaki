import React, { useEffect, useRef } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import { useTranslation } from 'react-i18next';

const TestimonialSlider = () => {
  const { t } = useTranslation();
  const sliderRef = useRef(null);
  const keenSliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      keenSliderRef.current = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: {
          origin: 'center',
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          '(min-width: 1024px)': {
            slides: {
              origin: 'auto',
              perView: 1.5,
              spacing: 32,
            },
          },
        },
      });
    }

    return () => {
      keenSliderRef.current?.destroy();
    };
  }, []);

  const navigatePrevious = () => {
    keenSliderRef.current?.prev();
  };

  const navigateNext = () => {
    keenSliderRef.current?.next();
  };

  const testimonials = [
    {
      quote: t("nfraei_testimonial_1_quote"),
      author: t("nfraei_testimonial_1_author"),
    },
    {
      quote: t("nfraei_testimonial_2_quote"),
      author: t("nfraei_testimonial_2_author"),
    },
    {
      quote: t("nfraei_testimonial_3_quote"),
      author: t("nfraei_testimonial_3_author"),
    },
    {
      quote: t("nfraei_testimonial_4_quote"),
      author: t("nfraei_testimonial_4_author"),
    },
  ];

  return (
    <section className="">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center sm:text-left">
            <h2 className="text-xl font-bold tracking-tight text-[#F7C35F] sm:text-3xl">
              {t("nfraei_testimonials_heading")}
            </h2>
            <p className="mt-4 text-gray-100">
              {t("nfraei_testimonials_subheading")}
            </p>

            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                aria-label={t("nfraei_testimonial_nav_previous")}
                onClick={navigatePrevious}
                className="rounded-full border border-[#F7C35F] p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <button
                aria-label={t("nfraei_testimonial_nav_next")}
                onClick={navigateNext}
                className="rounded-full border border-[#F7C35F] p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div ref={sliderRef} className="keen-slider">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="keen-slider__slide">
                  <blockquote className="flex h-full flex-col justify-between bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg m-2 p-6 shadow-sm sm:p-8 lg:p-12">
                    <div>
                      <div className="mt-4 leading-relaxed text-white">
                        {testimonial.quote}
                      </div>
                    </div>
                    <footer className="mt-4 text-sm font-medium text-[#F7C35F] sm:mt-6">
                      &mdash; {testimonial.author}
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
