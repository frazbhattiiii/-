import React from 'react';

import { BsFillShieldLockFill,BsEmojiSmileFill } from 'react-icons/bs';
import { IoIosOptions ,IoShirtOutline,IoShirt} from 'react-icons/io';
import { AiOutlineCloudUpload,AiFillCheckCircle } from 'react-icons/ai';
import { BiSupport, BiDollar } from 'react-icons/bi';
import {FaHandsHelping} from 'react-icons/fa';
import {HiGift,HiOutlineThumbUp } from 'react-icons/hi';
import {GiPoloShirt} from 'react-icons/gi';




const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Deserving People',
		description: 'Only deserving people who cannot afford to buy',
		icon: iconStyle(AiFillCheckCircle),
		imgClass: 'one',
	},
	{
		name: 'Ease of Giving',
		description: 'User friendly interface',
		icon: iconStyle(IoIosOptions),
		imgClass: 'two',
	},
	{
		name: 'صدقہ',
		description: 'Helping you for this noble cause',
		icon: iconStyle(HiOutlineThumbUp),
		imgClass: 'three',
	},
	{
		name: '24/7 Support',
		description: 'Our team is available at all times in case you need us',
		icon: iconStyle(BiSupport),
		imgClass: 'four',
	},
	{
		name: 'Used/New',
		description: 'Either new or old clothes',
		icon: iconStyle(GiPoloShirt),
		imgClass: 'five',
	},
	{
		name: 'Mutual Cooperation',
		description:
			'With mutual cooperation we aim to help as many people as we can',
		icon: iconStyle(FaHandsHelping),
		imgClass: 'six',
	},
];
