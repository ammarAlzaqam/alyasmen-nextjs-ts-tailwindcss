import { IconType } from "react-icons";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

interface Link {
  Icon: IconType;
  label: string;
  route: string;
}

const mediaLinks: Link[] = [
  {
    Icon: FaWhatsapp,
    label: "whatsapp",
    route: "https://wa.me/message/KFBIKLV33HYGF1",
  },
  {
    Icon: FaFacebook,
    label: "facebook",
    route: "https://www.facebook.com/ahmedzaid5050?mibextid=ZbWKwL",
  },
  {
    Icon: FaTiktok,
    label: "tiktok",
    route: "https://www.tiktok.com/@ahmedzaid198?_r=1&_t=ZS-91oFHLupSyG",
  },
  {
    Icon: FaInstagram,
    label: "instagram",
    route:
      "https://www.instagram.com/ahmed_mohmed_zaid?igsh=MXd5NGEzeWhyMnYxMA==",
  },
];

export default mediaLinks;
