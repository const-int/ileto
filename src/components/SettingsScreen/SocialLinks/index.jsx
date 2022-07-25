import React from "react";
import FacebookSvg from "./img/facebook.svg";
import TwitterSvg from "./img/twitter.svg";
import TelegramSvg from "./img/telegram.svg";
import ShareSvg from "./img/share.svg";
import Link from "./Link";
import useStyles from "./useStyles";

function SocialLinks() {
  const classes = useStyles();

  const links = [
    { label: "Like us on Facebook", icon: FacebookSvg, href: null },
    { label: "Follow us on Twitter", icon: TwitterSvg, href: null },
    { label: "Join us on Telegram", icon: TelegramSvg, href: null },
    { label: "Share", icon: ShareSvg, href: null },
  ];

  return (
    <div className={classes.root}>
      {links.map(({ label, icon, href }) => (
        <Link label={label} icon={icon} href={href} />
      ))}
    </div>
  );
}

export default SocialLinks;
