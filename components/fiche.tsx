"use client"
const Fiche = (props) => {
    const { img, nom, prenoms, genre, filiere } = props;
    return (
        <section>
            <h4 >Nom: {nom}</h4>
            <h4>Prénoms : {prenoms}</h4>
            <h4>Genre : {genre}</h4>
            <h4>filiere : {filiere}</h4>
        </section>

    )
}

export default Fiche