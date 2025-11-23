import { IconType } from "react-icons";
import { IoHome as HomeIcon } from "react-icons/io5";
import { IoMdInformationCircle as AboutIcon } from "react-icons/io";
import { MdOutlineMiscellaneousServices as ServicesIcon } from "react-icons/md";
import { RiCustomerServiceFill as ContactUsIcon } from "react-icons/ri";
import { RiContactsFill as ContactUseIcon2 } from "react-icons/ri";

interface Link {
  Icon: IconType;
  label: string;
  route: string;
}

const linksList: Link[] = [
  {
    Icon: HomeIcon,
    label: "الرئيسية",
    route: "/",
  },
  {
    Icon: AboutIcon,
    label: "من نحن",
    route: "/",
  },
  {
    Icon: ServicesIcon,
    label: "خدماتنا",
    route: "/services",
  },
  {
    Icon: ContactUsIcon,
    label: "تواصل معنا",
    route: "/contact",
  },
];

export default linksList;
