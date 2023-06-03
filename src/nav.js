import { ImFileEmpty } from "react-icons/im";
import { MdFitScreen } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";
import { MdOutlinePhonelink } from "react-icons/md";
import { SlScreenDesktop } from "react-icons/sl";
import { BsTools } from "react-icons/bs";
import { CiMobile1 } from "react-icons/ci";
import { RiShoppingCartFill } from "react-icons/ri";
import { CgPlayListCheck } from "react-icons/cg";
export const bar = [
  { title: "Home", navLink: "/" },
  { title: "Fruits", navLink: "/Beer" },
  { title: "Vegatables", navLink: "/Wine" },
  { title: "Grains", navLink: "/Spirits" },
  { title: "Legumes", navLink: "/Extras" },
  { title: "Dairy & Poultry", navLink: "/Poultry" },
  { title: "Fish", navLink: "/Fish" },
  { title: "Retailers", navLink: "/Retailers" },
  { title: "Stores", navLink: "/Stores" },
  { title: "Promotions", navLink: "/Promotions" },
];
export const how = [
  {
    titleIcon: <ImFileEmpty />,
    title: "Grocery Store Listing",
    titlelisting:
      "Get your grocery store listed on our platform and reach out to more customers and increase your sales.",
  },
  {
    titleIcon: <MdFitScreen />,
    title: "Branded Micro Website",
    titlelisting:
      "Complete control over the website content, products, services you want to showcase to your customers.",
  },
  {
    titleIcon: <MdAdminPanelSettings />,
    title: "Administrative Panel",
    titlelisting:
      "Easily manage orders, multiple store information, users, reports and much more from the admin panel.",
  },
  {
    titleIcon: <MdOutlinePhonelink />,
    title: "Store App",
    titlelisting:
      "App exclusively for liquor store owners to manage orders, products and its information..",
  },
  {
    titleIcon: <SlScreenDesktop />,
    title: "In Store TV Ads",
    titlelisting:
      "A unique way to showcase your products, event or brand on large TV sets installed in the store.",
  },
  {
    titleIcon: <BsTools />,
    title: "Marketing Toolkit",
    titlelisting:
      "Get personalized branding materials such as Banner, Door Stickers, Stand Sign, Flyers and more.",
  },
];
export const web = [
  {
    titleIcon: <CiMobile1 />,
    title: "Responsive Design",
    titlelisting:
      "The micro website is mobile friendly which ensures you stay ahead & never miss out on your target audience.",
  },
  {
    titleIcon: <CgPlayListCheck />,
    title: "Store Details",
    titlelisting:
      "Add and manage store details like store photos, timing, services and map location with ease.",
  },
  {
    titleIcon: <RiShoppingCartFill />,
    title: "Shopping Cart",
    titlelisting:
      "Get shopping cart integrated with your micro website that facilitates your visitors to place their orders.",
  },
];
