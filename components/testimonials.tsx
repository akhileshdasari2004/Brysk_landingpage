import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Marquee from "@/components/ui/marquee";
import Link from "next/link";
import React, { ComponentProps } from "react";

const testimonials = [
  {
    id: 1,
    name: "Alex Morgan",
    designation: "Office Manager",
    company: "Downtown Offices",
    testimonial:
      "Brysk provides 24/7 access to essentials for our busy professionals. The seamless checkout experience is a game changer!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Priya Patel",
    designation: "Hotel Operations Director",
    company: "CityStay Hotels",
    testimonial:
      "Our guests love the convenience of shopping any time, day or night. Brysk has truly enhanced our guest experience.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Jordan Lee",
    designation: "Campus Services Lead",
    company: "Metro University",
    testimonial:
      "Brysk supports student life with accessible retail solutions across campus. It's reliable, smart, and easy to use.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 4,
    name: "Emily Chen",
    designation: "Property Manager",
    company: "Urban Living Residences",
    testimonial:
      "We’ve unlocked new revenue streams by monetizing our lobby space. Brysk’s support and technology are top-notch!",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const Testimonials = () => (
  <div id="testimonials" className="flex justify-center items-center py-20">
    <div className="h-full w-full">
      <h2 className="mb-12 text-4xl md:text-5xl font-bold text-center tracking-tight px-6">
        Testimonials
      </h2>
      <div className="relative">
        <div className="z-10 absolute left-0 inset-y-0 w-[15%] bg-linear-to-r from-background to-transparent" />
        <div className="z-10 absolute right-0 inset-y-0 w-[15%] bg-linear-to-l from-background to-transparent" />
        <Marquee pauseOnHover className="[--duration:20s]">
          <TestimonialList />
        </Marquee>
        <Marquee pauseOnHover reverse className="mt-0 [--duration:20s]">
          <TestimonialList />
        </Marquee>
      </div>
    </div>
  </div>
);

const TestimonialList = () =>
  testimonials.map((testimonial) => (
    <div
      key={testimonial.id}
      className="min-w-96 max-w-sm bg-accent rounded-xl p-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
              {testimonial.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.designation}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" asChild>
          <Link href="#" target="_blank">
            <TwitterLogo className="w-4 h-4" />
          </Link>
        </Button>
      </div>
      <p className="mt-5 text-[17px]">{testimonial.testimonial}</p>
    </div>
  ));

const TwitterLogo = (props: ComponentProps<"svg">) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>X</title>
    <path
      fill="currentColor"
      d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
    />
  </svg>
);

export default Testimonials;
