import { defineType, defineField } from "sanity";

export default defineType({
  name: "transcriptPayment",
  title: "Transcript Payments",
  type: "document",
  fields: [
    defineField({ name: "reference", title: "Payment Reference", type: "string", readOnly: true }),
    defineField({
      name: "status",
      title: "Payment Status",
      type: "string",
      options: { list: ["pending", "paid", "failed"] },
      initialValue: "pending",
    }),
    defineField({ name: "fullName", title: "Full Name", type: "string" }),
    defineField({ name: "matricNumber", title: "Matric Number", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "phone", title: "Phone Number", type: "string" }),
    defineField({ name: "programme", title: "Programme", type: "string" }),
    defineField({ name: "yearOfGraduation", title: "Year of Graduation", type: "string" }),
    defineField({ name: "destinationInstitution", title: "Destination Institution", type: "string" }),
    defineField({ name: "extraCharge", title: "Extra Charge (NGN)", type: "number" }),
    defineField({ name: "amount", title: "Amount Paid (NGN)", type: "number" }),
    defineField({ name: "currency", title: "Currency", type: "string", initialValue: "NGN" }),
    defineField({ name: "paidAt", title: "Paid At", type: "datetime" }),
    defineField({ name: "receiptUrl", title: "Receipt URL", type: "url" }),
    defineField({
      name: "paystackMetadata",
      title: "Paystack Metadata",
      type: "object",
      fields: [
        { name: "fullName", type: "string" },
        { name: "matricNumber", type: "string" },
        { name: "email", type: "string" },
        { name: "phone", type: "string" },
        { name: "programme", type: "string" },
        { name: "yearOfGraduation", type: "string" },
        { name: "destinationInstitution", type: "string" },
        { name: "extraCharge", type: "number" },
      ],
    }),
  ],
  preview: {
    select: {
      title: "fullName",
      subtitle: "status",
      media: "status",
    },
  },
});
