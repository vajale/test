import React from "react";
import { StyledContacts } from "./styled";
import { ContactItem } from "@/features/Donate/ui/Info/Contacts/ContactItem";

// @ts-expect-error img error
import VK from "@/assets/svg/vk.svg";
// @ts-expect-error img error
import YouTube from "@/assets/svg/youtube.svg";
// @ts-expect-error img error
import Discord from "@/assets/svg/Discord.svg";
// @ts-expect-error img error
import TikTok from "@/assets/svg/TikTok.svg";

const ContactButtons = [
  {
    id: "vk",
    title: "Новости VK",
    link: "https://vk.com/",
    backgroundColor: "rgba(0, 119, 255, 1)",
    icon: VK,
  },
  {
    id: "discord",
    title: "Дискорд",
    link: "https://vk.com/",
    backgroundColor: "rgba(112, 135, 217, 1)",
    icon: Discord,
  },
  {
    id: "youtube",
    title: "YouTube",
    link: "https://vk.com/",
    backgroundColor: "rgba(234, 0, 37, 1)",
    icon: YouTube,
  },
  {
    id: "tiktok",
    title: "TikTok",
    link: "https://vk.com/",
    backgroundColor: "rgba(0, 0, 0, 1)",
    icon: TikTok,
  },
];

export const Contacts = ({ className }: { className?: string }) => {
  const buttonsNode = () => {
    return ContactButtons.map((item) => (
      <ContactItem key={item.id} contactItem={item} />
    ));
  };

  return <StyledContacts className={className}>{buttonsNode()}</StyledContacts>;
};
