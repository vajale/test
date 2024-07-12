import { TabItems } from "@/features/Donate/model/store/index";

export interface IDonateModel {
  activeTab: TabItems;
  priviligueList: IPrivilegue[];
}

export interface IPrivilegue {
  id: string;
  imageUrl: string;
  price: string;
  sale: string;
  description: string;
}
