const svgs = [
	{
		id: 1,
		svg_name: "ethereum-logo",
		svg_path: `<svg width="50" height="50" viewBox="0 0 33 52" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M16.0301 0.678223L15.6797 1.83184V35.3042L16.0301 35.643L32.06 26.4589L16.0301 0.678223Z" fill="black"/>
		<path d="M16.0304 0.678192L0 26.4588L16.0304 35.643V19.3964V0.678192Z" fill="black"/>
		<path d="M16.0305 38.5848L15.833 38.8183V50.7416L16.0305 51.3004L32.0702 29.4054L16.0305 38.5848Z" fill="black"/>
		<path d="M16.0304 51.3004V38.5848L0 29.4054L16.0304 51.3004Z" fill="black"/>
		<path d="M16.0303 35.643L32.0602 26.4588L16.0303 19.3965V35.643Z" fill="black"/>
		<path d="M0 26.4588L16.0304 35.643V19.3965L0 26.4588Z" fill="black"/>
		</svg>`,
	},
	{
		id: 2,
		svg_name: "transfer-logo",
		svg_path: `<svg width="35" height="35" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_117_61)">
      <path d="M45.0003 32.5C45.867 32.5004 46.7004 32.8343 47.3277 33.4324C47.9549 34.0306 48.3281 34.8471 48.3697 35.7128C48.4114 36.5786 48.1184 37.4271 47.5514 38.0827C46.9844 38.7383 46.187 39.1506 45.3243 39.2343L45.0003 39.25H17.1475L20.3875 42.49C21.0013 43.1015 21.3563 43.9256 21.3792 44.7917C21.4021 45.6578 21.091 46.4995 20.5104 47.1425C19.9298 47.7856 19.1241 48.1807 18.2602 48.2462C17.3963 48.3116 16.5404 48.0423 15.8695 47.494L15.613 47.2623L6.99779 38.6448C4.80629 36.4533 6.23279 32.7565 9.22754 32.5135L9.54254 32.5H45.0003ZM33.6153 8.74001C34.2056 8.14915 34.9941 7.79817 35.8282 7.75495C36.6623 7.71173 37.4828 7.97933 38.131 8.50601L38.3875 8.73776L47.0028 17.3553C49.1943 19.5468 47.7678 23.2435 44.773 23.4865L44.458 23.5H9.00029C8.13355 23.4996 7.3002 23.1657 6.67292 22.5676C6.04563 21.9695 5.67251 21.1529 5.63086 20.2872C5.5892 19.4215 5.88222 18.5729 6.44918 17.9173C7.01614 17.2617 7.81359 16.8494 8.67629 16.7658L9.00029 16.75H36.853L33.613 13.51C32.981 12.8772 32.626 12.0194 32.626 11.125C32.626 10.2306 32.9833 9.37282 33.6153 8.74001Z" fill="black"/>
      </g>
      <defs>
      <clipPath id="clip0_117_61">
      <rect width="54" height="52.3401" fill="white" transform="translate(0 0.0672607)"/>
      </clipPath>
      </defs>
      </svg>`,
	},
	{
		id: 3,
		svg_name: "rewards-section",
		svg_path: `<svg width="35" height="35" viewBox="0 0 32 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.25 15.7477C0.252588 18.2258 0.840706 20.6682 1.96642 22.8758C3.09212 25.0835 4.72356 26.9938 6.72775 28.4512L6.73 28.4535C8.02018 29.3992 9.44744 30.1421 10.9622 30.6562L11.077 30.699C11.93 30.9774 12.8055 31.1814 13.6938 31.3087C14.4558 31.4306 15.226 31.4945 15.9977 31.5H16C16.7875 31.5 17.5525 31.4235 18.3108 31.311L18.7202 31.248C19.4762 31.1152 20.2142 30.9352 20.9275 30.7012L21.022 30.6652C27.25 28.5592 31.75 22.6755 31.75 15.7477C31.75 7.065 24.685 0 16 0C7.315 0 0.25 7.065 0.25 15.7477ZM16 4.5C22.201 4.5 27.25 9.5445 27.25 15.7477H22.75C22.7476 13.9585 22.0356 12.2432 20.7702 10.9782C19.5048 9.71321 17.7893 9.00178 16 9V4.5ZM5.92225 33.2887V45L16 41.625L26.0778 45L26.08 33.2887C23.0177 35.0639 19.5408 35.9988 16.0011 35.9988C12.4615 35.9988 8.98459 35.0639 5.92225 33.2887Z" fill="black"/>
      </svg>`,
	},
	// {
	//     id: 4,
	//     svg_name:"ethereum-logo",
	//     svg_path: `<svg width="90" height="88" viewBox="0 0 90 88" fill="none" xmlns="http://www.w3.org/2000/svg">
	//     <ellipse cx="45" cy="43.879" rx="45" ry="43.6167" fill="black"/>
	//     <path d="M45.0301 18.6782L44.6797 19.8318V53.3042L45.0301 53.643L61.06 44.4589L45.0301 18.6782Z" fill="white"/>
	//     <path d="M45.0304 18.6782L29 44.4588L45.0304 53.643V37.3964V18.6782Z" fill="white"/>
	//     <path d="M45.0305 56.5848L44.833 56.8183V68.7416L45.0305 69.3004L61.0702 47.4054L45.0305 56.5848Z" fill="#FFFFC4"/>
	//     <path d="M45.0304 69.3004V56.5848L29 47.4054L45.0304 69.3004Z" fill="white"/>
	//     <path d="M45.0303 53.643L61.0602 44.4588L45.0303 37.3965V53.643Z" fill="white"/>
	//     <path d="M29 44.4588L45.0304 53.643V37.3965L29 44.4588Z" fill="white"/>
	//     </svg>`
	// }
];

export default svgs;
