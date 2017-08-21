const express    = require('express');
const experience = require('./modules/experience');
const app        = express();
const port       = 3001;


/*
 *  Fetching data by choose a type.
 */

// outdoor
// const type            = 'outdoor';
// const experience_list = [1603, 1970, 2717, 664, 1632, 2644, 2309, 158, 390, 2620, 1893, 1439];

// hand made
// const type            = 'hand_made';
// const experience_list = [1422, 1288, 2686, 339, 2600, 2632, 2143, 1345, 946, 565, 2249, 454];

// baking
// const type            = 'baking';
// const experience_list = [2446, 1812, 1803, 2696, 775, 2625, 2628, 2592, 2694, 334, 387, 2316];

// summer camp
// const type            = 'summer_camp';
// const experience_list = [161, 1551, 2533, 2234, 1552, 2634, 1099, 2501, 2570, 1607, 2558, 2518];

// group
// const type            = 'group';
// const experience_list = [1096, 1546, 1987, 1971, 1298, 945, 1347, 2509, 621, 1690, 2080, 1265];

// play_with_child
// const type            = 'play_with_child';
// const experience_list = [2571, 1359, 1358, 1610, 1592, 2705, 2683, 1840, 979, 2640, 1332, 2633];

// lover
// const type            = 'lover';
// const experience_list = [1216, 2000, 284, 1215, 1609, 2682, 1213, 1980, 1853, 1160, 2200, 2124];


experience.get(experience_list[0], type);
experience.get(experience_list[1], type);
experience.get(experience_list[2], type);
experience.get(experience_list[3], type);
experience.get(experience_list[4], type);
experience.get(experience_list[5], type);
experience.get(experience_list[6], type);
experience.get(experience_list[7], type);
experience.get(experience_list[8], type);
experience.get(experience_list[9], type);
experience.get(experience_list[10], type);
experience.get(experience_list[11], type);

app.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});
