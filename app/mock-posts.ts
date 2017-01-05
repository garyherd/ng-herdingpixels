import { BlogPost } from './blog-post';

export const POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Blog Post With Text Only",
    publishDate: "6/24/2014",
    labels: ["Small Business"],
    content: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus
    pellentesque porttitor. Aliquam sit amet magna vitae orci sollicitudin vehicula vitae vitae ante.
    Etiam at sapien et erat tristique imperdiet vitae vitae mi. Mauris cursus, nibh non dapibus
    consectetur, dolor arcu ultrices nunc, ut tincidunt elit odio quis erat. Praesent
    semper nisl vel nibh semper tincidunt a eu ante. Pellentesque a pretium ex. Phasellus
    consectetur leo eu justo elementum, eu feugiat quam viverra. Nam nec viverra ipsum. Aliquam
    scelerisque nec orci congue dapibus. In vel leo scelerisque, commodo neque eu, dignissim sapien.
    Cras volutpat ultricies est ut sodales. Pellentesque tempus ornare mauris, eget laoreet augue
    vehicula ut. Nam tempor leo et mi condimentum, id egestas eros pretium. Nulla eget quam in quam
    dapibus malesuada eget in velit. Integer facilisis, justo nec condimentum dictum, ante leo
    euismod ex, finibus euismod dolor nulla a urna.</p><p>Maecenas et luctus mauris. Pellentesque sit amet turpis et risus interdum mattis.
    Duis turpis nisi, ultricies vitae eros non, faucibus aliquet diam. Curabitur at nibh posuere,
    convallis magna ut, vulputate ipsum. Suspendisse nec fermentum augue, ac consequat lorem.
    Aenean tincidunt aliquam sapien, in accumsan lorem imperdiet ut. Morbi nulla lacus, aliquet
    quis convallis id, efficitur non turpis. Etiam ultricies rhoncus nibh, non molestie metus.
    Pellentesque mollis magna a ipsum faucibus volutpat. Curabitur convallis aliquam sagittis.</p>
    `,
    comments: []
  },

  {
    id: 2,
    title: "Another Blog Post With Text Only",
    publishDate: "12/30/2016",
    labels: ["Javascript", "Websites"],
    content: `
    <p>Lorem ipsum dolor sit amet, velit arcu nunc sollicitudin, justo interdum turpis, parturient
    tellus nostra sed tellus. Ante aliquam etiam convallis wisi magna, potenti ac mi aenean tempus
    ultrices, nulla scelerisque orci, magna libero magna. Imperdiet tellus ut elementum, amet orci
    velit elementum, non euismod dictum consectetuer, sed viverra libero ligula, eu massa hymenaeos
    dictum auctor. Ut vitae adipiscing. Consequat elit. Nunc nec. Id est tristique montes magna odio
    arcu, lacus commodo ducimus laborum nec, lobortis sed diam nibh ante feugiat, nulla quam
    pretium mattis nostra, fringilla amet nonummy. Ligula lectus sit cupiditate ut. Nibh sit platea
    dignissim lorem, porta pulvinar ridiculus, et eros nunc erat tempus suscipit, et mauris luctus
    egestas elementum a, elit vehicula curabitur nulla et cursus.</p>

    <p>Maecenas et luctus mauris. Pellentesque sit amet turpis et risus interdum mattis.
    Duis turpis nisi, ultricies vitae eros non, faucibus aliquet diam. Curabitur at nibh posuere,
    convallis magna ut, vulputate ipsum. Suspendisse nec fermentum augue, ac consequat lorem.
    Aenean tincidunt aliquam sapien, in accumsan lorem imperdiet ut. Morbi nulla lacus, aliquet
    quis convallis id, efficitur non turpis. Etiam ultricies rhoncus nibh, non molestie metus.
    Pellentesque mollis magna a ipsum faucibus volutpat. Curabitur convallis aliquam sagittis.</p>
    `,
    comments: []
  },
];