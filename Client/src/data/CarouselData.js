export const data = [
	{
		title: 'What the people say about our services',
		description:
			'People are very happy and their response was extraordinary in this regard and we received overall highly positive response',
		image: './assets/poverty.jpg',
	},
	{
		title: 'Our Projects',
		description: 'We are trying to cover as many areas as we can till now the cities like Lahore, karachi, Depalpur, Sahiwal are part of our project',
		image: './assets/poorland.jpg',
	},
	{
		title: 'Our Team',
		description: 'Our team consist of youngsters, some volunteers, analyst and many big names of Pakistan ',
		image: './assets/backLogo.png',
	},
	{
		title: 'Our Motive',
		description: '“When a person dies, all their deeds end except three: a continuing charity, beneficial knowledge and a child who prays for them,” (Hadith, Muslim)',
		image: './assets/mosque.jpg',
	},
	{
		title: 'Lahore Project',
		description: 'In recent times, we had done a project in lahore in which we cover many rural areas of Lahore providing people with the best we can',
		image: './assets/lahore.jpg',
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};
