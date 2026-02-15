import { defineType, defineField } from "sanity";

export default defineType({
  name: "transcriptRequest",
  title: "Transcript Requests",
  type: "document",
  fields: [
    defineField({
      name: "reference",
      title: "Payment Reference",
      type: "string",
      readOnly: true,
    }),

    defineField({
      name: "status",
      title: "Payment Status",
      type: "string",
      options: {
        list: ["pending", "paid", "failed"],
      },
      initialValue: "pending",
    }),

    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
    }),

    defineField({
      name: "matricNumber",
      title: "Matric Number",
      type: "string",
    }),

    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),

    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),

    defineField({
      name: "programme",
      title: "Programme",
      type: "string",
    }),

    defineField({
      name: "yearOfGraduation",
      title: "Year of Graduation",
      type: "string",
    }),

    defineField({
      name: "destinationInstitution",
      title: "Destination Institution",
      type: "string",
    }),

    defineField({
      name: "amount",
      title: "Amount Paid",
      type: "number",
    }),

    defineField({
      name: "paidAt",
      title: "Paid At",
      type: "datetime",
    }),
  ],
});
