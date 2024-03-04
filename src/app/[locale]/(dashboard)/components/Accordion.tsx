"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={"border-b pb-10"} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex p-10 pl-0 ">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={`flex flex-1 [text-align:inherit]  items-center justify-between  text-[2.2rem] tracking-wide font-normal text-gray-2 transition-all data-[state=open]:text-color-blue-1 [&>svg]:ml-16   [&[data-state=open]>svg]:hidden [&[data-state=open]>div]:block 2xl:text-[2.8rem] lg:!text-[3.6rem]`}
      {...props}
    >
      {children}
      <FaPlus className="h-8 w-8  shrink-0 transition-transform duration-200 lg:w-10 lg:h-10" />
      <div className="hidden">
        <FaMinus className="h-8 w-8  shrink-0 transition-transform duration-200 lg:w-10 lg:h-10" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={`overflow-hidden  [text-align:inherit]  text-[2rem] text-gray-500 font-extralight w-10/12  transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down 2xl:text-[2.6rem] lg:!text-[3.2rem] `}
    {...props}
  >
    <div className={"pb-36  pt-0 "}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
