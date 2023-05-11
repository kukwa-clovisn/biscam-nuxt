// using state functions

export const useMenuState = () => useState(() => false);

export const openChat = () => useState(() => false);

export const useLoaderState = () => useState(() => false);

export const useLinkState = () =>
  useState(() => [
    {
      name: "car repair",
      path: "https://www.facebook.com/bisinvestltd?mibextid=ZbWKwL",
    },
    {
      name: "flight",
      path: "https://www.facebook.com/profile.php?id=100090158095703&mibextid=ZbWKwL",
    },
    {
      name: "cleaning agency",
      path: "https://www.facebook.com/profile.php?id=100090287600432&mibextid=ZbWKwL",
    },
    {
      name: "spare part",
      path: "https://www.facebook.com/bisinvestltd?mibextid=ZbWKwL",
    },
    {
      name: "maritime",
      path: "https://www.facebook.com/bisinvestltd?mibextid=ZbWKwL",
    },
  ]);

export const useWhatsappLinkState = () =>
  useState(() => [
    {
      name: "car repair",
      path: "https://wa.link/rt49uv",
    },
    {
      name: "flight",
      path: "https://wa.link/290wm",
    },
    {
      name: "cleaning agency",
      path: "https://wa.link/wrxet8",
    },
    {
      name: "spare part",
      path: "https://wa.link/rt49uv",
    },
    {
      name: "maritime",
      path: "https://wa.link/rt49uv",
    },
  ]);
