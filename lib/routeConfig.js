import { BiNews } from "react-icons/bi";

const config = [
  {
    title: "Top Headlines",
    path: "/",
    group: null,
    icon: () => <BiNews />,
  },
  { title: "Taiwan", path: "tw", group: "country", icon: () => <BiNews /> },
  { title: "China", path: "cn", group: "country", icon: () => <BiNews /> },
  {
    title: "World",
    path: "general",
    group: "category",
    icon: () => <BiNews />,
  },
  {
    title: "Business",
    path: "business",
    group: "category",
    icon: () => <BiNews />,
  },
  {
    title: "Entertainment",
    path: "entertainment",
    group: "category",
    icon: () => <BiNews />,
  },
  {
    title: "Sports",
    path: "sports",
    group: "category",
    icon: () => <BiNews />,
  },
  {
    title: "Technology",
    path: "technology",
    group: "category",
    icon: () => <BiNews />,
  },
];
export default config;
