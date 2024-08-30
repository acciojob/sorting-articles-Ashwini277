document.addEventListener("DOMContentLoaded", function() {
    const bands = [
        'The Plot in You', 
        'The Devil Wears Prada', 
        'Pierce the Veil', 
        'Norma Jean', 
        'The Bled', 
        'Say Anything', 
        'The Midway State', 
        'We Came as Romans', 
        'Counterparts', 
        'Oh, Sleeper', 
        'A Skylit Drive', 
        'Anywhere But Here', 
        'An Old Dog'
    ];

    const removeArticles = str => str.replace(/\b(a|an|the)\b\s*/gi, '');

    const sortedBands = bands
        .map(removeArticles)
        .sort()
        .map(band => `<li>${band}</li>`)
        .join('');

    document.getElementById('bands').innerHTML = sortedBands;
});

