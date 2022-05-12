// Sélection des boutons
let etape_1_button = document.querySelector('.etape_1 button')
let etape_2_button = document.querySelector('.etape_2 button')
let icon = document.querySelector('.icon')

// Sélection des formulaires
let etape_1_form = document.querySelector('.etape_1')
let etape_2_form = document.querySelector('.etape_2')

// Écouter les évènements et lancer des action en js au clique
etape_1_button.addEventListener('click', e => {
    // Je fais disparaitre le formulaire 1 en cliquant sur le bouton "valider"
    etape_1_form.style.display = 'none'
    // Je fais apparaître le formulaire 2 avec le message de confirmation
    etape_2_form.style.display = 'inherit'
})

etape_2_button.addEventListener('click', e => {
    // Je fais disparaitre le message de confirmation en cliquant sur le bouton "retour"
    etape_2_form.style.borderRadius = '200px'
    etape_2_form.style.backgroundColor = 'red'
    etape_2_form.style.color = '#FFFFFF'
})

icon.addEventListener('click', e => {
    // Je fais apparaître le formulaire en cliquant sur l'icone"
    etape_1_form.style.display = 'inherit'
    // Je fais disparaitre le formulaire 2 avec le message de confirmation
    etape_2_form.style.display = 'none'
})