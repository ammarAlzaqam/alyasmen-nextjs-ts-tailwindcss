import { IconType } from "react-icons";
import { FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";

interface Link {
  Icon: IconType;
  label: string;
  route: string;
}

const mediaLinks: Link[] = [
  {
    Icon: FaWhatsapp,
    label: "whatsapp",
    route: "",
  },
  {
    Icon: FaFacebook,
    label: "facebook",
    route: "",
  },
  {
    Icon: FaTiktok,
    label: "tiktok",
    route: "",
  },
];

export default mediaLinks;
