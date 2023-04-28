import { InputField } from "@/src/components/InputComponent";

export const itemFields: InputField[] = [
  {
    type: "text",
    placeholder: "Item Number",
    id: "itemNum",
    value: "",
    maxLength: 4
  },
  {
    type: "text",
    placeholder: "Description",
    id: "description",
    value: "",
    maxLength: 30
  },
  {
    type: "number",
    placeholder: "On Hand",
    id: "onHand",
    value: "",
    step: 1
  },
  {
    type: "text",
    placeholder: "Category",
    id: "category",
    value: "",
    maxLength: 4
  },
  {
    type: "text",
    placeholder: "Storehouse",
    id: "storehouse",
    value: "",
    maxLength: 1
  },
  {
    type: "number",
    placeholder: "Price",
    id: "price",
    value: "",
    step: 0.01,
    minimum: 1,
    maximum: 999999
  }
]