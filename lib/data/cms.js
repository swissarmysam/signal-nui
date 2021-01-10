/**
 * @file This object is used to simulate a CMS using a simple object
 * This reduces setup but it could be used with any CMS model
 * data-* attributes will be assigned to HTML to get correct key for page render
 */

/* import faker from 'faker'; */
import { randomInt } from '../utils/helpers';

const thumbUrl = 'https://ik.imagekit.io/3l1z4b3th/signal/';
const videoUrl = 'https://www.youtube.com/watch?v=';

const CMS = [
  {
    id: 0,
    title: 'Coffee Run',
    url: `${videoUrl}PVGeM40dABA`,
    videoId: `PVGeM40dABA`,
    thumbnail: `${thumbUrl}coffee_run_poster_321FSdqQeN.jpg`,
    releaseYear: 2020,
    desc: `Coffee Run was directed by Hjalti Hjalmarsson and produced by the team at Blender Animation Studio. 
      Fueled by caffeine, a young woman runs through the bittersweet memories of her past relationship.`,
    rating: randomInt(1, 5, 0),
    slug: `coffee-run`,
    onWatchlist: true,
  },
  {
    id: 1,
    title: 'Elephants Dream',
    url: `${videoUrl}TLkA0RELQ1g`,
    videoId: `TLkA0RELQ1g`,
    thumbnail: `${thumbUrl}elephants_dream_poster_RL589C1QOD.jpg`,
    releaseYear: 2006,
    desc: `Two people who explore a strange mechanical world, with each an entire own perception on what’s actually there. 
      The emotional ending shows once more the violent impact of mixing reality and fantasy.`,
    rating: randomInt(1, 5, 0),
    slug: `elephants-dream`,
    onWatchlist: false,
  },
  {
    id: 2,
    title: 'Big Buck Bunny',
    url: `${videoUrl}YE7VzlLtp-4`,
    videoId: `YE7VzlLtp-4`,
    thumbnail: `${thumbUrl}big_buck_bunny_poster_vXdOwG3ZnfAe.jpg`,
    releaseYear: 2008,
    desc: `A giant, gentle rabbit finds his happy morning walk being disturbed by rodents who kill his two favorite butterflies. 
      In a rage, he sets up a masterful plan to avenge the deaths of the butterflies.`,
    rating: randomInt(1, 5, 0),
    slug: `big-buck-bunny`,
    onWatchlist: false,
  },
  {
    id: 3,
    title: 'Cosmos Laundromat',
    url: `${videoUrl}Y-rmzh0PI3c`,
    videoId: `Y-rmzh0PI3c`,
    thumbnail: `${thumbUrl}cosmos_laundromat_poster_6MD5YwtpM6PYL.jpg`,
    releaseYear: 2015,
    desc: `Cosmos Laundromat is an absurdist love story – the story of Franck the sheep, who gets the opportunity to live any life he wants.`,
    rating: randomInt(1, 5, 0),
    slug: `cosmos-laundromat`,
    onWatchlist: false,
  },
  {
    id: 4,
    title: 'Spring',
    url: `${videoUrl}WhWc3b3KhnY`,
    videoId: `WhWc3b3KhnY`,
    thumbnail: `${thumbUrl}spring_poster_09jKbwbXq.jpg`,
    releaseYear: 2019,
    desc: `Spring is the story of a shepherd girl and her dog, who face ancient spirits in order to continue the cycle of life. This poetic and 
    visually stunning short title was written and directed by Andy Goralczyk, inspired by his childhood in the mountains of Germany.`,
    rating: randomInt(1, 5, 0),
    slug: `spring`,
    onWatchlist: false,
  },
  {
    id: 5,
    title: 'Agent 327: Operation Barbershop',
    url: `${videoUrl}mN0zPOpADL4`,
    videoId: `mN0zPOpADL4`,
    thumbnail: `${thumbUrl}agent_327_barbershop_poster_yPW7PzwHk.jpg`,
    releaseYear: 2017,
    desc: `Agent 327 is investigating a clue that leads him to a barbershop in Amsterdam. Little he knows that he is being tailed by mercenary Boris Kloris…`,
    rating: randomInt(1, 5, 0),
    slug: `agent-327-ob`,
    onWatchlist: false,
  },
  {
    id: 6,
    title: 'Glass Half',
    url: `${videoUrl}lqiN98z6Dak`,
    videoId: `lqiN98z6Dak`,
    thumbnail: `${thumbUrl}glass_half_poster_1EkZTRymZPR55.jpg`,
    releaseYear: 2015,
    desc: `Two amateur art critics meet in a gallery and argue passionately about the pieces they see, until finally they find a piece on which they can agree…`,
    rating: randomInt(1, 5, 0),
    slug: `glass-half`,
    onWatchlist: false,
  },
  {
    id: 7,
    title: 'Tears of Steel',
    url: `${videoUrl}R6MlUcmOul8`,
    videoId: `R6MlUcmOul8`,
    thumbnail: `${thumbUrl}tears_of_steel_poster_obFlpAiPzCmK.jpg`,
    releaseYear: 2012,
    desc: `A group of warriors and scientists, who gathered at the “Oude Kerk” in Amsterdam to stage a crucial event from the past, in a desperate attempt to 
    rescue the world from destructive robots.`,
    rating: randomInt(1, 5, 0),
    slug: `tears-of-steel`,
    onWatchlist: false,
  },
];

export default CMS;
