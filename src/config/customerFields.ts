import { InputField } from "@/src/components/InputComponent";

export const customerFields: InputField[] = [
  {
    type: "number",
    placeholder: "Customer Number",
    id: "customerNum",
    value: 100,
    minimum: 100,
    maximum: 999
  },
  {
    type: "text",
    placeholder: "Customer Name",
    id: "customerName",
    value: "",
    maxLength: 35
  },
  {
    type: "text",
    placeholder: "Street Address",
    id: "street",
    value: "",
    maxLength: 20
  },
  {
    type: "text",
    placeholder: "City",
    id: "city",
    value: "",
    maxLength: 15
  },
  {
    type: "text",
    placeholder: "State",
    id: "state",
    value: "",
    maxLength: 2
  },
  {
    type: "number",
    placeholder: "Zip Code",
    id: "postalCode",
    value: "",
    minimum: 10000,
    maximum: 99999
  },
  {
    type: "number",
    placeholder: "Balance",
    id: "balance",
    value: "",
    minimum: 0,
    maximum: 1000000,
    step: 0.01
  },
  {
    type: "number",
    placeholder: "Credit Limit",
    id: "creditLimit",
    value: "",
    minimum: 1000,
    maximum: 1000000,
    step: 0.01
  }
]
