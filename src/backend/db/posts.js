import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
	{
		_id: uuid(),
		content: "El Psy Congroo!!!",
		likes: {
			likeCount: 2,
			likedBy: [
				{
					_id: "cc13231a-572b-42dc-a2d9-e4ea3fb68b71",
					username: "kurisu12",
				},
				{
					_id: "cc13231a-572b-42dc-a2d9-e4ea3fb68b78",
					username: "okabe22",
				},
			],
			dislikedBy: [],
		},
		username: "okabe22",
		userImage:
			"https://res.cloudinary.com/dwubqdebj/image/upload/v1658253776/ani-chat/latest_mgcj1h.jpg",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		comments: [
			{
				_id: uuid(),
				username: "kurisu12",
				userImage:
					"https://res.cloudinary.com/dwubqdebj/image/upload/v1658254295/ani-chat/350_qcdv4a.jpg",
				text: "Interesting",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
				createdAt: formatDate(),
				updatedAt: formatDate(),
			},
		],
	},
	{
		_id: uuid(),
		content: "It is foolish to fear what we have yet to see and know.",
		likes: {
			likeCount: 3,
			likedBy: [
				{
					_id: "cc13231a-572b-42dc-a2d9-e4ea3fb68b71",
					username: "kurisu12",
				},
				{
					_id: "cc13231a-572b-42dc-a2d9-e4ea3fb68b78",
					username: "okabe22",
				},
				{
					_id: "cc13231a-572b-42dc-a2d9-e4ea3fb68b73",
					username: "ayano_12",
				},
			],
			dislikedBy: [],
		},
		username: "itachi22",
		userImage:
			"https://res.cloudinary.com/dwubqdebj/image/upload/v1658254224/ani-chat/300_pk56x9.png",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		comments: [
			{
				_id: uuid(),
				username: "yui767",
				userImage:
					"https://res.cloudinary.com/dwubqdebj/image/upload/v1658254119/ani-chat/350_ocms2r.png",
				text: "I agree",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
				createdAt: formatDate(),
				updatedAt: formatDate(),
			},
		],
	},
	{
		_id: uuid(),
		content:
			"Everyone is a slave to their past. No matter how much you wish to move forward, the events of last year will bear down on you like the light of the stars as soon as you glance up. Unable to laugh or to banish your past, you carry it ceaselessly in a corner of your heart, waiting for it to resurrect at an inopportune moment.",
		likes: {
			likeCount: 2,
			likedBy: [
				{
					_id: "cc13231a-572b-42dc-a2d9-e4ea3fb68b74",
					username: "yui767",
				},
				{
					_id: "cc13231a-572b-42dc-a2d9-e4ea3fb68b79",
					username: "john_12",
				},
			],
			dislikedBy: [],
		},
		username: "hachi_8",
		userImage:
			"https://res.cloudinary.com/dwubqdebj/image/upload/v1658254072/ani-chat/350_e196i1.jpg",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		comments: [
			{
				_id: uuid(),
				username: "yui767",
				userImage:
					"https://res.cloudinary.com/dwubqdebj/image/upload/v1658254119/ani-chat/350_ocms2r.png",
				text: "That's deep......!!!!",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
				createdAt: formatDate(),
				updatedAt: formatDate(),
			},
		],
	},
	{
		_id: uuid(),
		content:
			"I’ve only lived 18 years, but I don’t want to change any of them. They’re all part of my life, even the failures.",
		likes: {
			likeCount: 3,
			likedBy: [
				{
					_id: "cc13231a-572b-42dc-a2d9-e4ea3fb68b71",
					username: "kurisu12",
				},
				{
					_id: "cc13231a-572b-42dc-a2d9-e4ea3fb68b78",
					username: "okabe22",
				},
				{
					_id: "cc13231a-572b-42dc-a2d9-e4ea3fb68b73",
					username: "ayano_12",
				},
			],
			dislikedBy: [],
		},
		username: "kurisu12",
		userImage:
			"https://res.cloudinary.com/dwubqdebj/image/upload/v1658254295/ani-chat/350_qcdv4a.jpg",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		comments: [],
	},
];
