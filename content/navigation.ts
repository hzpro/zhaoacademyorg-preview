export interface NavItem {
  label: string;
  href: string;
}

export const navigation: NavItem[] = [
  { label: "首页", href: "/" },
  { label: "关于我们", href: "/about" },
  { label: "教育资讯", href: "/news" },
  { label: "联系我们", href: "/contact" },
];
