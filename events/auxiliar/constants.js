/* eslint-disable no-unused-vars */

// From JavaScript
const Discord = require('discord.js');
const canvas = require('canvas');
const fs = require('fs');

// Channel ids
const VOICE_CHANNEL_FALL_GUYS = '481523402645962759';
const CHANNEL_FALL_GUYS = '750723648100237363';

const VOICE_CHANNEL_AMONG_US = '753022620298903645';
const CHANNEL_AMONG_US = '753022463155372193';

const CHANNEL_TESTING_BOTS = '753361148585312367';
const CHANNEL_JM = '758610849064681482';

// User ids
const USER_FRANGE = '308564113431461888';
const USER_PRIME = '468752740147920897';
const USER_CROKE = '481517697272905730';

// Rol ids
const ROL_GAYOLO = '753022904618319962';
const ROL_BOTS = '753521283551068260';
const ROL_EVERYONE = '481523401899507713';

// Commands
const COMMAND_SAY = 's';
const COMMAND_HELP = 'h';
const COMMAND_CLEAR = 'c';
// const COMMAND_JOIN = 'j';

// Images
const images1p = [
	{ img: './newchallenger.jpg', xsize: 854, ysize: 480, x1: 600, y1: 240, rad: 130 },
	{ img: './img/1p-1.jpg', xsize: 640, ysize: 360, x1: 330, y1: 130, rad: 40 },
	{ img: './img/1p-2.jpg', xsize: 640, ysize: 360, x1: 325, y1: 127, rad: 40 },
	{ img: './img/1p-3.jpg', xsize: 640, ysize: 360, x1: 330, y1: 125, rad: 40 },
	{ img: './img/1p-4.jpg', xsize: 640, ysize: 360, x1: 330, y1: 125, rad: 40 },
];

const images2p = [
	{ img: './img/2p-1.jpg', xsize: 640, ysize: 360, x1: 330, y1: 130, x2: 250, y2: 150, rad: 40 },
	{ img: './img/2p-2.jpg', xsize: 640, ysize: 360, x1: 325, y1: 127, x2: 250, y2: 150, rad: 40 },
	{ img: './img/2p-3.jpg', xsize: 640, ysize: 360, x1: 330, y1: 125, x2: 250, y2: 150, rad: 40 },
];

const images3p = [
	{ img: './img/3p-1.jpg', xsize: 640, ysize: 360, x1: 330, y1: 110, x2: 250, y2: 150, x3: 410, y3: 150, rad: 40 },
	{ img: './img/3p-2.jpg', xsize: 640, ysize: 360, x1: 325, y1: 110, x2: 250, y2: 150, x3: 410, y3: 150, rad: 40 },
];

const images4p = [
	{ img: './img/4p-1.jpg', xsize: 640, ysize: 360, x1: 330, y1: 110, x2: 250, y2: 150, x3: 410, y3: 150, x4: 410, y4: 150, rad: 40 },
	{ img: './img/4p-2.jpg', xsize: 640, ysize: 360, x1: 325, y1: 110, x2: 250, y2: 150, x3: 410, y3: 150, x4: 410, y4: 150, rad: 40 },
	{ img: './img/4p-3.jpg', xsize: 640, ysize: 360, x1: 330, y1: 110, x2: 250, y2: 150, x3: 410, y3: 150, x4: 410, y4: 150, rad: 40 },
	{ img: './img/4p-4.jpg', xsize: 640, ysize: 360, x1: 325, y1: 110, x2: 250, y2: 150, x3: 410, y3: 150, x4: 410, y4: 150, rad: 40 },
	{ img: './img/4p-5.jpg', xsize: 640, ysize: 360, x1: 330, y1: 110, x2: 250, y2: 150, x3: 410, y3: 150, x4: 410, y4: 150, rad: 40 },
];