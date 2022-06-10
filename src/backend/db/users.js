import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
	{
		_id: uuid(),
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
		followers: [
			{
				_id: uuid(),
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
		],
		following: [],
		bookmarks: [],
	},
	{
		_id: uuid(),
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
];
