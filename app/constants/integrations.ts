import type {
  AvailableIntegrations,
  ConnectedIntegrations,
} from "~/types/integration.types";

export const connectedIntegrations: ConnectedIntegrations[] = [
  {
    id: 1,
    name: "Вконтакте",
    icon: "/socials_icons/vk.svg",
    hoverIcon: "/socials_icons/vk_hover.svg",
    username: "Бешеная Лама",
    apiKey: "12345",
  },
  {
    id: 2,
    name: "WhatsApp",
    icon: "/socials_icons/whatsapp.svg",
    hoverIcon: "/socials_icons/whatsapp_hover.svg",
    username: "Бешеная Лама",
    apiKey: "67890",
  },
  {
    id: 3,
    name: "Telegram",
    icon: "/socials_icons/telegram.svg",
    hoverIcon: "/socials_icons/telegram_hover.svg",
    username: "Бешеная Лама",
    apiKey: "54321",
  },
];

export const availableIntegrations: AvailableIntegrations[] = [
  {
    id: 4,
    name: "Вконтакте",
    icon: "/socials_icons/vk.svg",
    hoverIcon: "/socials_icons/vk_hover.svg",
    instruction: "Инструкция по подключению",
  },
  {
    id: 5,
    name: "WhatsApp",
    icon: "/socials_icons/whatsapp.svg",
    hoverIcon: "/socials_icons/whatsapp_hover.svg",
    instruction: "Инструкция по подключению",
  },
  {
    id: 6,
    name: "Telegram",
    icon: "/socials_icons/telegram.svg",
    hoverIcon: "/socials_icons/telegram_hover.svg",
    instruction: "Инструкция по подключению",
  },
  {
    id: 7,
    name: "WhatsApp",
    icon: "/socials_icons/whatsapp.svg",
    hoverIcon: "/socials_icons/whatsapp_hover.svg",
    instruction: "Инструкция по подключению",
  },
  {
    id: 8,
    name: "Telegram",
    icon: "/socials_icons/telegram.svg",
    hoverIcon: "/socials_icons/telegram_hover.svg",
    instruction: "Инструкция по подключению",
  },
];
