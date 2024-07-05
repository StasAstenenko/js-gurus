document.addEventListener('DOMContentLoaded', function () {
    const projectBtn = document.querySelector('.prj-btn');

    projectBtn.addEventListener('click', function () {
        const githubProjectUrl = 'https://stasastenenko.github.io/js-gurus/';
        window.open(githubProjectUrl, '_blank');
    });
});



