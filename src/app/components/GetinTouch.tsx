"use client";
import Image from "next/image";
import { useState } from "react";
import ClipBoard from "..//..//..//public/clipBoard.svg";
import gitHubLogoColored from "..//..//..//public/github-mark-colored.svg";
import LinkedInLogo from "..//..//..//public/linkedIn.svg";
import MailLogo from "..//..//..//public/mailLogo.svg";
import Notification from "./Notification";

const GetInTouch = () => {
  const [showNotification, setShowNotification] = useState(false);

  const HandleClick = () => {
    navigator.clipboard.writeText("marc@pollet.dev");
    setShowNotification(true);
    // Hide the notification after 2 seconds
    setTimeout(() => setShowNotification(false), 800);
  };

  const OpenLinkInNewTab = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col md:flex-row justify-center md:items-start gap-5   p-5 rounded-lg">
      <div className="flex gap-4 bg-base-100 hover:scale-105 transition-all scale-100 cursor-pointer ease-in-out px-4 py-2 rounded-md mb-0 sm:mb-5 ">
        <Image src={MailLogo} alt="email" height={25} width={25} />
        <h1>marc.pollet@proton.me</h1>
        <Image
          onClick={HandleClick}
          src={ClipBoard}
          alt="copy email to clip Board"
          height={25}
          width={25}
        />
        {showNotification && (
          <div className="absolute bottom-0 top-0">
            <Notification message="Copied to clipboard" />
          </div>
        )}
      </div>
      <div
        onClick={() =>
          OpenLinkInNewTab("https://www.linkedin.com/in/marc-pollet/")
        }
        className="flex gap-4 bg-base-100 hover:scale-105 transition-all scale-100 cursor-pointer ease-in-out px-4 py-2 rounded-md mb-0 sm:mb-5 "
      >
        <Image src={LinkedInLogo} alt="LinkedIn" height={25} width={25} />
        <h1>Marc Pollet</h1>
      </div>
      <div className="flex gap-4 bg-base-100 hover:scale-105 transition-all scale-100 cursor-pointer ease-in-out px-4 py-2 rounded-md mb-0 sm:mb-5 ">
        <Image src={gitHubLogoColored} alt="Github" height={25} width={25} />
        <h1>@Marcoded</h1>
      </div>
    </div>
  );
};

export default GetInTouch;
