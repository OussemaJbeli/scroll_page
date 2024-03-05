const Txt1 = [
    'AI Text Generator',
    'AI Image Generator',
    'AI Code Generator',
    'AI Chat Bot',
    'AI Speech To Text',
    'News Articles',
    'Blog Posts',
    'Academic Writing',
    ];

var tagCloud = TagCloud('.skils_words', Txt1, {

    // Sphere radius in px
    radius: 230,
    // animation speed
    // slow, normal, fast
    maxSpeed: 'normal',
    initSpeed: 'fast',
    // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
    direction: 135,
    // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
    keep: true

});

// Giving color 070c2a each text in sphere
var color = '#fff ';
document.querySelector('.skils_words').style.color = color;