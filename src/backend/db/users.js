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
		followers: [
			{
				_id: "cc13231a-572b-42dc-a2d9-e4ea3fb68b77",
			},
		],
		following: [],
		bookmarks: [],
	},
	{
		_id: "cc13231a-572b-42dc-a2d9-e4ea3fb68b78",
		firstName: "Rintaro",
		lastName: "Okabe",
		username: "okabe22",
		password: "okabe@22",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		image:
			"https://res.cloudinary.com/dwubqdebj/image/upload/v1658253776/ani-chat/latest_mgcj1h.jpg",
		site: "https://steins-gate.fandom.com/wiki/Rintaro_Okabe",
		bio: "Mad Scientist, El Psy Congroo",
		followers: [{ _id: "cc13231a-572b-42dc-a2d9-e4ea3fb68b79" }],
		following: [],
		bookmarks: [],
	},
	{
		_id: "cc13231a-572b-42dc-a2d9-e4ea3fb68b77",
		firstName: "Killua",
		lastName: "Zoldyck",
		username: "killua22",
		password: "zolkil@22",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		image:
			"https://res.cloudinary.com/dwubqdebj/image/upload/v1658253931/ani-chat/350_aryq0y.png",
		site: "https://hunterxhunter.fandom.com/wiki/Killua_Zoldyck",
		bio: "Assasin",
		followers: [{ _id: "cc13231a-572b-42dc-a2d9-e4ea3fb68b79" }],
		following: [],
		bookmarks: [],
	},
	{
		_id: "cc13231a-572b-42dc-a2d9-e4ea3fb68b76",
		firstName: "Eren",
		lastName: "Yeager",
		username: "eren_22",
		password: "eren@123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		image:
			"https://res.cloudinary.com/dwubqdebj/image/upload/v1658254019/ani-chat/350_zyoroj.png",
		site: "https://attackontitan.fandom.com/wiki/Eren_Yeager",
		bio: "Survey Corps",
		followers: [
			{
				_id: "cc13231a-572b-42dc-a2d9-e4ea3fb68b72",
			},
			{
				_id: "cc13231a-572b-42dc-a2d9-e4ea3fb68b73",
			},
			{
				_id: "cc13231a-572b-42dc-a2d9-e4ea3fb68b75",
			},
			{
				_id: "cc13231a-572b-42dc-a2d9-e4ea3fb68b77",
			},
		],
		following: [],
		bookmarks: [],
	},
	{
		_id: "cc13231a-572b-42dc-a2d9-e4ea3fb68b75",
		firstName: "Hikigaya",
		lastName: "Hachiman",
		username: "hachi_8",
		password: "hH@88",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		image:
			"https://res.cloudinary.com/dwubqdebj/image/upload/v1658254072/ani-chat/350_e196i1.jpg",
		site: "https://hero.fandom.com/wiki/Hachiman_Hikigaya",
		bio: "Student",
		followers: [],
		following: [],
		bookmarks: [],
	},
	{
		_id: "cc13231a-572b-42dc-a2d9-e4ea3fb68b74",
		firstName: "Yui",
		lastName: "Yuigahama",
		username: "yui767",
		password: "yui@2sad2",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		image:
			"https://res.cloudinary.com/dwubqdebj/image/upload/v1658254119/ani-chat/350_ocms2r.png",
		site: "https://oregairu.fandom.com/wiki/Yui_Yuigahama",
		bio: "Student",
		followers: [
			{
				_id: "cc13231a-572b-42dc-a2d9-e4ea3fb68b72",
			},
			{
				_id: "cc13231a-572b-42dc-a2d9-e4ea3fb68b73",
			},
			{
				_id: "cc13231a-572b-42dc-a2d9-e4ea3fb68b75",
			},
		],
		following: [],
		bookmarks: [],
	},
	{
		_id: "cc13231a-572b-42dc-a2d9-e4ea3fb68b73",
		firstName: "Kiyotaka",
		lastName: "Ayanokōji",
		username: "ayano_12",
		password: "kiyota@123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		image:
			"https://res.cloudinary.com/dwubqdebj/image/upload/v1658254179/ani-chat/293_xegob9.png",
		site: "https://you-zitsu.fandom.com/wiki/Kiyotaka_Ayanok%C5%8Dji",
		bio: "Student",
		followers: [],
		following: [],
		bookmarks: [],
	},
	{
		_id: "cc13231a-572b-42dc-a2d9-e4ea3fb68b72",
		firstName: "Itachi",
		lastName: "Uchiha",
		username: "itachi22",
		password: "UchiIta@22",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		image:
			"https://res.cloudinary.com/dwubqdebj/image/upload/v1658254224/ani-chat/300_pk56x9.png",
		site: "https://naruto.fandom.com/wiki/Itachi_Uchiha",
		bio: "Ninja",
		followers: [],
		following: [],
		bookmarks: [],
	},
	{
		_id: "cc13231a-572b-42dc-a2d9-e4ea3fb68b71",
		firstName: "Kurisu",
		lastName: "Makise",
		username: "kurisu12",
		password: "kurisu@M12",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		image:
			"https://res.cloudinary.com/dwubqdebj/image/upload/v1658254295/ani-chat/350_qcdv4a.jpg",
		site: "https://steins-gate.fandom.com/wiki/Kurisu_Makise",
		bio: "Scientist, Assistant of Mad Scientist",
		followers: [
			{
				_id: "cc13231a-572b-42dc-a2d9-e4ea3fb68b72",
			},
			{
				_id: "cc13231a-572b-42dc-a2d9-e4ea3fb68b73",
			},
		],
		following: [],
		bookmarks: [],
	},
];
