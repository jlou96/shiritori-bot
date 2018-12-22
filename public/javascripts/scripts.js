$(document).ready(() => {
    $('button#displayAbout').click(() => {
        $('div#aboutContent').toggle();
    });
});

$(document).ready(() => {
    $('button#displayAboutGame').click(() => {
        $('div#aboutGameContent').toggle();
    });
});

// $(document).ready(() => {
//     $('button#displayAboutDiff').click(() => {
//         $('div#aboutDiffContent').toggle();
//     });
// });

$(document).ready(() => {
    $('button#displayPlay').click(() => {
        $('div#gameContent').toggle();
    });
});

// $(document).ready(() => {
//     $('button#displayAbout').click(() => {
//         fetch(path.join(__dirname, 'views', 'about-game.pug'))
//         .then((resp) => {
//             console.log('I made it to the fetch() part!');
//             if (!resp.ok) {
//                 throw Error(resp.statusText);
//             }
//             return resp.text();
//         })
//         .then((respAsText) => {
//             console.log('I made it to the second fetch() part!');
//             console.log(respAsText);
//         })
//     })
// })
