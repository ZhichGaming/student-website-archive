"use client"

import { useState } from "react";
import NavigationCard from "./_components/NavigationCard";
import EmailsCard from "./_components/EmailsCard";

export default function EmailPage({}) {
  const [selectedSorting, setSelectedSorting] = useState("dd");

  const [isReadChecked, setIsReadChecked] = useState(true);
	const [isUnreadChecked, setIsUnreadChecked] = useState(true);
	const [canHaveAttachmentChecked, setCanHaveAttachmentChecked] = useState(true);

  return (
    <div className="flex flex-col w-screen h-screen pl-12 pr-12 pb-12">
      <div className="flex items-center my-4">
        <h1 className="font-bold text-lg">Inbox</h1>
        <p className="text-sm text-black opacity-50 ml-2">2,381 messages</p>
      </div>
      <div className="flex-grow flex space-x-6">
        <div className="w-[275px]">
          <NavigationCard 
          selectedSorting={selectedSorting} onSortingChange={setSelectedSorting} 
          isReadChecked={isReadChecked} setIsReadChecked={setIsReadChecked} 
          isUnreadChecked={isUnreadChecked} setIsUnreadChecked={setIsUnreadChecked} 
          canHaveAttachmentChecked={canHaveAttachmentChecked} setCanHaveAttachmentChecked={setCanHaveAttachmentChecked}/>
        </div>
        <EmailsCard 
        selectedSorting={selectedSorting} 
        isReadChecked={isReadChecked} 
        isUnreadChecked={isUnreadChecked} 
        canHaveAttachmentChecked={canHaveAttachmentChecked}/>
      </div>
    </div>
  );
}
