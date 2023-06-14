export default function EmailsCard({ selectedSorting, isReadChecked, isUnreadChecked, canHaveAttachmentChecked }) {
	let emails: Email[] = [
		{ sender: "Karina Dionne (Classroom)", subject: "À rendre demain : \"Leclerc, Vigneault et Miron\"", date: new Date("December 18, 1995 03:24:00"), read: false, hasAttachment: false, size: 25748 },
		{ sender: "Denis Zhang (via Google Chat)", subject: "En votre absence, Denis Zhang <zhad21054@jdlm.qc.ca> ...", date: new Date("December 18, 1995 03:24:00"), read: false, hasAttachment: true, size: 257348 },
		{ sender: "The Browser Company <mem...", subject: "Arc Update: We can't reinvent everything", date: new Date("December 19, 1995 03:24:00"), read: false, hasAttachment: false, size: 225748 },
		{ sender: "\"Leonardo Liu (via Google Cha...", subject: "En votre absence, Leonardo Liu <liul20759@jdlm.qc.ca> v...", date: new Date("December 19, 1995 03:24:00"), read: true, hasAttachment: false, size: 22748 },
		{ sender: "Quizlet <newsletter@lifecycle...", subject: "Ready to make studying easier, Zhi cheng?", date: new Date("December 20, 1995 03:24:00"), read: true, hasAttachment: false, size: 25748 },
		{ sender: "GitHub <noreply@github.com>", subject: "[GitHub] Your personal access token (classic) has expired", date: new Date("December 28, 1995 03:24:00"), read: false, hasAttachment: false, size: 55748 },
		{ sender: "Langwen Xu (Google Docs) <c...", subject: "Exam de ciencias ... - Supprimer : “3: Il y a présence de co...", date: new Date("December 17, 1995 03:24:00"), read: false, hasAttachment: true, size: 15748 },
		{ sender: "GitHub <noreply@github.com>", subject: "[GitHub] Your personal access token (classic) is about to...", date: new Date("December 17, 1995 03:24:00"), read: false, hasAttachment: true, size: 95748 },
		{ sender: "FILM CRUX <lion@filmcrux.co...", subject: "🌒 Game-Changing Tool for Filmmakers", date: new Date("December 24, 1995 03:24:00"), read: true, hasAttachment: false, size: 15748 },
		{ sender: "GitHub <noreply@github.com>", subject: "[GitHub] Your personal access token (classic) is about to...", date: new Date("December 17, 1995 03:24:00"), read: true, hasAttachment: false, size: 35748 },
		{ sender: "Quizlet <newsletter@lifecycle...", subject: "Ready to make studying easier, Zhi cheng?", date: new Date("December 17, 1995 03:24:00"), read: false, hasAttachment: false, size: 32748 },
		{ sender: "The Browser Company <mem...", subject: "Arc Update: We can't reinvent everything", date: new Date("December 17, 1995 03:24:00"), read: true, hasAttachment: true, size: 5748 }
		// TODO: Adding these emails will cause the div to overflow. Setting the parent div to overflow-hidden or overflow-scroll does not do anything.
		// { sender: "FILM CRUX <lion@filmcrux.co...", subject: "🌒 Game-Changing Tool for Filmmakers", date: "Jun 13" },
		// { sender: "FILM CRUX <lion@filmcrux.co...", subject: "🌒 Game-Changing Tool for Filmmakers", date: "Jun 13" },
		// { sender: "FILM CRUX <lion@filmcrux.co...", subject: "🌒 Game-Changing Tool for Filmmakers", date: "Jun 13" }
	]

	let emailsHtml = emails.filter((email) => {
		if (!isReadChecked && email.read) return false;
		if (!isUnreadChecked && !email.read) return false;
		if (!canHaveAttachmentChecked && email.hasAttachment) return false;

		return true;
	}).sort((a, b) => {
		if (selectedSorting == "dd") return b.date.getTime() - a.date.getTime();
		if (selectedSorting == "da") return a.date.getTime() - b.date.getTime();
		if (selectedSorting == "sa") return a.sender.localeCompare(b.sender);
		if (selectedSorting == "sd") return b.sender.localeCompare(a.sender);
		if (selectedSorting == "s") return b.size - a.size;
	}).map((email) => {
		return <EmailItem sender={email.sender} subject={email.subject} date={email.date.getDate().toString() + "/" + email.date.getMonth() + "/" + email.date.getFullYear()}/>
	});

	return (
		<div className="bg-white rounded-md h-full p-4 flex flex-col flex-grow overflow-hidden">
			{emailsHtml}
		</div>
	);
}

function EmailItem({ sender, subject, date }: { sender: string, subject: string, date: string }) {
	return (
		<div className="flex p-3 rounded-md hover:bg-black hover:bg-opacity-10">
			<input type="checkbox" className="mr-2"/>
			{/* wow this is confusing i spent 1 day on this bruv ._. */}
			<div className="flex items-center w-full">
				<p className="w-64 flex-shrink-0 overflow-hidden whitespace-nowrap text-ellipsis">{sender}</p>
				<div className="flex-grow">
					<p className="line-clamp-1 text-ellipsis">{subject}</p>
				</div>
				<p className="w-24 ml-auto text-right line-clamp-1 whitespace-nowrap text-ellipsis">{date}</p>
			</div>
		</div>
	);
}

type Email = {
	sender: string,
	subject: string,
	date: Date,
	read: boolean,
	hasAttachment: boolean,
	size: number
}
