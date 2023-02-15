import React from "react";

function Last() {
	return (
		<>
			<div className="w-[100vw] h-[100vh] items-center flex flex-col">
				<div className="my-auto space-y-8 w-[50vw]">
					<h2 className="font-bold text-5xl text-center">Contact Us</h2>
					<form className="grid grid-cols-1 space-y-6">
						<input
							type="text"
							className="p-3 w-[80%] rounded-2xl mx-auto bg-slate-200 pl-5"
							placeholder="Enter Your Name ...."
						/>
						<input
							type="email"
							className="p-3 w-[80%] rounded-2xl mx-auto bg-slate-200 pl-5"
							placeholder="Enter Your Email ...."
						/>
						<textarea
							name="message"
							placeholder="Message ...."
							id=""
							className="p-3 w-[80%] rounded-2xl mx-auto bg-slate-200 pl-5 pt-5"
							cols={30}
							rows={10}
						></textarea>
						<button
							type="submit"
							className="p-3 w-[80%] rounded-2xl bg-white font-bold text-xl mx-auto border-black border-2 "
						>
							Send Message
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default Last;
