import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
	{
		_id: "cc13231a-572b-42dc-a2d9-e4ea3fb68b79",
		firstName: "John",
		lastName: "Doe",
		username: "john_12",
		password: "John@123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		image:
			"https://res.cloudinary.com/dwubqdebj/image/upload/v1654799864/ani-chat/pexels-andre-furtado-1264210_vbekhh.jpg",
		site: "https://john.netlify.app",
		bio: "Unity Developer",
		followers: [],
		following: [],
		bookmarks: [],
	},
	{
		_id: "cc13231a-572b-42dc-a2d9-e4ea3fb68b78",
		firstName: "Andrea",
		lastName: "White",
		username: "andy22",
		password: "andyW@22",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		image:
			"https://res.cloudinary.com/dwubqdebj/image/upload/v1654799864/ani-chat/pexels-andre-furtado-1264210_vbekhh.jpg",
		site: "https://andy.netlify.app",
		bio: "Web Developer",
		following: [],
		bookmarks: [],
	},
	{
		_id: "cc13231a-572b-42dc-a2d9-e4ea3fb68b77",
		firstName: "Andrew",
		lastName: "Walker",
		username: "andy22",
		password: "andyW@22",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		image:
			"https://res.cloudinary.com/dwubqdebj/image/upload/v1654799864/ani-chat/pexels-andre-furtado-1264210_vbekhh.jpg",
		site: "https://andy.netlify.app",
		bio: "Freelancer",
		following: [],
		bookmarks: [],
	},
];
