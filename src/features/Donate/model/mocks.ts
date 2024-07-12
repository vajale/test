import { IPrivilegue } from "@/features/Donate/model/store/types";

// @ts-expect-error img error
import Sigma from "@/assets/svg/Sigma.svg";
// @ts-expect-error img error
import Emperor from "@/assets/svg/Emperor.svg";
// @ts-expect-error img error
import Legend from "@/assets/svg/Legend.svg";
// @ts-expect-error img error
import Premium from "@/assets/svg/Premium.svg";
// @ts-expect-error img error
import Vip from "@/assets/svg/Vip.svg";

export const mockPriviligue: IPrivilegue[] = [
  {
    id: "emperor",
    price: "1119",
    sale: "1999",
    description: "",
    imageUrl: Emperor,
  },
  {
    id: "sigma",
    price: "549",
    sale: "1049",
    description: "",
    imageUrl: Sigma,
  },
  {
    id: "legend",
    price: "349",
    sale: "749",
    description: "",
    imageUrl: Legend,
  },
  {
    id: "premium",
    price: "149",
    sale: "349",
    description: "",
    imageUrl: Premium,
  },
  {
    id: "vip",
    price: "49",
    sale: "149",
    description: "",
    imageUrl: Vip,
  },
];
