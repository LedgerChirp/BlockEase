import { signIn } from "next-auth/react";
import React from "react";

function authenticate() {
	return (
		<>
			<div className="grid overflow-hidden grid-cols-2">
				<div className="mt-10">
					<a href="/" className="">
						<p className="font-bold ml-10 text-xl">← Back to Home</p>
					</a>
					<h1 className="font-bold text-4xl my-10 ml-16 lg:ml-72">Login</h1>
					<div className="grid grid-rows-3">
						<div className="mx-auto my-auto">
							<button
								onClick={() =>
									signIn("google", {
										callbackUrl: "https://block-ease.vercel.app/",
									})
								}
								className="rounded-full p-6 bg-[#DCEAF8] hover:bg-cyan-50 hover:ease-in-out"
							>
								<svg
									width="48"
									height="48"
									viewBox="0 0 50 49"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M25.6156 21.0573V29.412H39.8197C39.1095 32.8932 35.5585 39.8555 25.6156 39.8555C17.0931 39.8555 10.3461 32.8932 10.3461 24.5384C10.3461 16.1837 17.0931 9.22135 25.6156 9.22135C30.587 9.22135 33.783 11.31 35.5585 13.0506L42.3055 6.78454C38.0442 2.60716 32.3626 0.170349 25.6156 0.170349C11.7665 0.170349 0.758301 10.9619 0.758301 24.5384C0.758301 38.1149 11.7665 48.9065 25.6156 48.9065C39.8197 48.9065 49.4075 39.1593 49.4075 25.2346C49.4075 23.4941 49.4075 22.4497 49.0524 21.0573H25.6156Z"
										fill="black"
									/>
								</svg>
							</button>
						</div>
						<div className="mx-auto my-auto">
							<svg
								width="100"
								height="39"
								viewBox="0 0 305 39"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M142.504 31.32C140.755 31.32 139.144 31.032 137.672 30.456C136.2 29.88 134.92 29.08 133.832 28.056C132.744 27.0107 131.901 25.7947 131.304 24.408C130.707 23 130.408 21.464 130.408 19.8C130.408 18.136 130.707 16.6107 131.304 15.224C131.901 13.816 132.744 12.6 133.832 11.576C134.92 10.5307 136.2 9.72 137.672 9.144C139.144 8.568 140.744 8.28 142.472 8.28C144.221 8.28 145.821 8.568 147.272 9.144C148.744 9.72 150.024 10.5307 151.112 11.576C152.2 12.6 153.043 13.816 153.64 15.224C154.237 16.6107 154.536 18.136 154.536 19.8C154.536 21.464 154.237 23 153.64 24.408C153.043 25.816 152.2 27.032 151.112 28.056C150.024 29.08 148.744 29.88 147.272 30.456C145.821 31.032 144.232 31.32 142.504 31.32ZM142.472 27.672C143.603 27.672 144.648 27.48 145.608 27.096C146.568 26.712 147.4 26.168 148.104 25.464C148.808 24.7387 149.352 23.9067 149.736 22.968C150.141 22.008 150.344 20.952 150.344 19.8C150.344 18.648 150.141 17.6027 149.736 16.664C149.352 15.704 148.808 14.872 148.104 14.168C147.4 13.4427 146.568 12.888 145.608 12.504C144.648 12.12 143.603 11.928 142.472 11.928C141.341 11.928 140.296 12.12 139.336 12.504C138.397 12.888 137.565 13.4427 136.84 14.168C136.136 14.872 135.581 15.704 135.176 16.664C134.792 17.6027 134.6 18.648 134.6 19.8C134.6 20.9307 134.792 21.976 135.176 22.936C135.581 23.896 136.136 24.7387 136.84 25.464C137.544 26.168 138.376 26.712 139.336 27.096C140.296 27.48 141.341 27.672 142.472 27.672ZM158.946 31V8.6H168.162C170.146 8.6 171.842 8.92 173.25 9.56C174.679 10.2 175.778 11.1173 176.546 12.312C177.314 13.5067 177.698 14.9253 177.698 16.568C177.698 18.2107 177.314 19.6293 176.546 20.824C175.778 21.9973 174.679 22.904 173.25 23.544C171.842 24.1627 170.146 24.472 168.162 24.472H161.25L163.106 22.584V31H158.946ZM173.602 31L167.938 22.872H172.385L178.082 31H173.602ZM163.106 23.032L161.25 21.048H167.97C169.804 21.048 171.18 20.6533 172.097 19.864C173.036 19.0747 173.506 17.976 173.506 16.568C173.506 15.1387 173.036 14.04 172.097 13.272C171.18 12.504 169.804 12.12 167.97 12.12H161.25L163.106 10.072V23.032Z"
									fill="black"
								/>
								<line
									x1="206.99"
									y1="21.5001"
									x2="304.99"
									y2="19.5001"
									stroke="#8D8D8D"
								/>
								<line
									x1="0.989798"
									y1="21.5001"
									x2="98.9898"
									y2="19.5001"
									stroke="#8D8D8D"
								/>
							</svg>
						</div>
						<div className="mx-auto my-auto">
							<button
								onClick={() =>
									signIn("github", {
										callbackUrl: "https://block-ease.vercel.app/",
									})
								}
								className="rounded-full p-6 bg-[#DCEAF8] hover:bg-cyan-50 hover:ease-in-out"
							>
								<svg
									width="48"
									height="48"
									viewBox="0 0 84 80"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M42.1079 0.120972C19.2455 0.120972 0.728033 18.4253 0.728033 41.0245C0.72334 49.6113 3.4542 57.9815 8.53317 64.9477C13.6121 71.9138 20.7813 77.1222 29.0236 79.8338C31.0926 80.1897 31.8664 78.9625 31.8664 77.8868C31.8664 76.9174 31.8126 73.6983 31.8126 70.2705C21.418 72.1644 18.7283 67.7673 17.9007 65.4644C17.4331 64.2864 15.4179 60.6582 13.6592 59.6847C12.2109 58.9198 10.142 57.026 13.6055 56.9769C16.8662 56.9237 19.1917 59.9424 19.9697 61.1695C23.6939 67.3541 29.6443 65.6157 32.0195 64.5441C32.3836 61.8853 33.4678 60.0978 34.6595 59.0753C25.4525 58.0527 15.8317 54.5227 15.8317 38.8771C15.8317 34.4268 17.4331 30.7495 20.0731 27.8822C19.6593 26.8596 18.211 22.667 20.4869 17.0428C20.4869 17.0428 23.9504 15.9711 31.8664 21.2395C35.235 20.3153 38.7155 19.8502 42.2114 19.8569C45.7287 19.8569 49.2459 20.3151 52.5563 21.2354C60.4682 15.9179 63.9358 17.0469 63.9358 17.0469C66.2117 22.6711 64.7634 26.8637 64.3496 27.8863C66.9855 30.7495 68.591 34.3777 68.591 38.8771C68.591 54.5759 58.9206 58.0527 49.7135 59.0753C51.2115 60.3514 52.5067 62.8057 52.5067 66.6424C52.5067 72.1112 52.4529 76.5083 52.4529 77.8909C52.4529 78.9626 53.2308 80.2387 55.2998 79.8297C63.5138 77.0883 70.6514 71.8699 75.708 64.9087C80.7645 57.9476 83.4855 49.5943 83.4878 41.0245C83.4878 18.4253 64.9703 0.120972 42.1079 0.120972Z"
										fill="black"
									/>
								</svg>
							</button>
						</div>
					</div>
					<p className="mt-40 ml-3">
						Don't have a account?{" "}
						<a
							href="https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp"
							className="text-cyan-900 hover:text-blue-700"
						>
							Create One
						</a>{" "}
					</p>
				</div>
				<div className="" id="design">
					<svg
						width="700"
						height="690"
						viewBox="0 0 827 1024"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<ellipse
							cx="619.856"
							cy="540.255"
							rx="619.856"
							ry="612.255"
							fill="#DCEAF8"
						/>
						<g style={{ mixBlendMode: "difference" }} opacity="0.1">
							<path
								d="M446.872 252.984L442.97 266.086V646.242L446.872 650.09L625.387 545.783L446.872 252.984Z"
								fill="#8F7F7F"
							/>
							<path
								d="M446.873 252.984L268.353 545.783L446.873 650.091V465.573V252.984Z"
								fill="black"
							/>
							<path
								d="M446.873 683.501L444.673 686.152V821.569L446.873 827.915L625.497 579.247L446.873 683.501Z"
								fill="#8D8D8D"
							/>
							<path
								d="M446.873 827.915V683.501L268.353 579.247L446.873 827.915Z"
								fill="black"
							/>
							<path
								d="M446.871 650.09L625.387 545.783L446.871 465.573V650.09Z"
								fill="#3E3E3E"
							/>
							<path
								d="M268.353 545.783L446.873 650.09V465.573L268.353 545.783Z"
								fill="#8D8D8D"
							/>
						</g>
					</svg>
				</div>
			</div>
		</>
	);
}

export default authenticate;
