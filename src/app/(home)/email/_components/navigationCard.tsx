export default function NavigationCard({ selectedSorting, onSortingChange, isReadChecked, setIsReadChecked, isUnreadChecked, setIsUnreadChecked, canHaveAttachmentChecked, setCanHaveAttachmentChecked }) {
	const handleIsReadCheckedChange = (event) => {
    setIsReadChecked(!isReadChecked);
  };

	const handleIsUnreadCheckedChange = (event) => {
		setIsUnreadChecked(!isUnreadChecked);
	};

	const handleHasAttachmentCheckedChange = (event) => {
		setCanHaveAttachmentChecked(!canHaveAttachmentChecked);
	};

	const handleSortingChange = (event) => {
		onSortingChange(event.target.value);
	};

	return (
		<div className="bg-white rounded-md h-full p-4 flex flex-col space-y-4 w-[275px]">
			<div>
				<button className="flex items-center pl-2 pr-2 p-1 rounded-md hover:bg-black hover:bg-opacity-10 w-full">
					<i className="fa-solid fa-inbox mr-2"></i>
					All
				</button>
				<button className="flex items-center pl-2 pr-2 p-1 rounded-md hover:bg-black hover:bg-opacity-10 w-full">
					<i className="fa-solid fa-envelope mr-2"></i>
					Unread
				</button>
				<button className="flex items-center pl-2 pr-2 p-1 rounded-md hover:bg-black hover:bg-opacity-10 w-full">
					<i className="fa-solid fa-paper-plane mr-2"></i>
					Sent
				</button>
				<button className="flex items-center pl-2 pr-2 p-1 rounded-md hover:bg-black hover:bg-opacity-10 w-full">
					<i className="fa-solid fa-pencil mr-2"></i>
					Draft
				</button>
				<button className="flex items-center pl-2 pr-2 p-1 rounded-md hover:bg-black hover:bg-opacity-10 w-full">
					<i className="fa-solid fa-trash mr-2"></i>
					Trash
				</button>
			</div>

			<hr/>

			<div>
				<p className="text-sm font-semibold">Filter</p>

				<label className="flex items-center pl-2 pr-2 p-1 rounded-md w-full">
					<input type="checkbox" className="mr-2" onChange={handleIsReadCheckedChange} checked={isReadChecked}/>
					<p>Read</p>
				</label>
				<label className="flex items-center pl-2 pr-2 p-1 rounded-md w-full">
					<input type="checkbox" className="mr-2" onChange={handleIsUnreadCheckedChange} checked={isUnreadChecked}/>
					<p>Unread</p>
				</label>
				<label className="flex items-center pl-2 pr-2 p-1 rounded-md w-full">
					<input type="checkbox" className="mr-2" onChange={handleHasAttachmentCheckedChange} checked={canHaveAttachmentChecked}/>
					<p>Has Attachment</p>
				</label>
			</div>
			<div>
				<p className="text-sm font-semibold">Sorting</p>

				<div>
					<label className="flex items-center pl-2 pr-2 p-1 rounded-md w-full">
						<input type="radio" value={"dd"} name="sorting" className="mr-2" onChange={handleSortingChange} checked={selectedSorting == "dd"}/>
						<p>Date Descending</p>
					</label>
					<label className="flex items-center pl-2 pr-2 p-1 rounded-md w-full">
						<input type="radio" value={"da"} name="sorting" className="mr-2" onChange={handleSortingChange} checked={selectedSorting == "da"}/>
						<p>Date Ascending</p>
					</label>
					<label className="flex items-center pl-2 pr-2 p-1 rounded-md w-full">
						<input type="radio" value={"sd"} name="sorting" className="mr-2" onChange={handleSortingChange} checked={selectedSorting == "sd"}/>
						<p>Subject Descending</p>
					</label>
					<label className="flex items-center pl-2 pr-2 p-1 rounded-md w-full">
						<input type="radio" value={"sa"} name="sorting" className="mr-2" onChange={handleSortingChange} checked={selectedSorting == "sa"}/>
						<p>Subject Ascending</p>
					</label>
					<label className="flex items-center pl-2 pr-2 p-1 rounded-md w-full">
						<input type="radio" value={"s"} name="sorting" className="mr-2" onChange={handleSortingChange} checked={selectedSorting == "s"}/>
						<p>Size</p>
					</label>
				</div>
			</div>
		</div>
	);
}
